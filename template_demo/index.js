const express=require('express');
const app=express();
const path=require('path');
const redditData = require('./data.json');

//public folder-static files
app.use(express.static(path.join(__dirname,'public')));

//view folder-ejs files
app.set('view engine','ejs');
app.set('views',path.join(__dirname, '/views_folder'));

//create a get API to load home template
app.get('/',(req,res)=>{
    // res.render('home');
    let title='HOME';
    res.render('home',{title});  // this is for using dynamic title of the web browser
})

app.get('/fetch-random',(req,res)=>{
    const num=Math.floor(Math.random() * 10 ) + 1;
    res.render('random',{number:num});   /*sending num here as a javascript object*/
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    const data=redditData[subreddit];
    if (data) {
        res.render('sbreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('/cats', (req, res) => {
    const catsList = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]   
    let title='CATS';
    res.render('cats', { catsList,title })
    
})

app.listen(5000,()=>{
    console.log('5000 port server is running');
})