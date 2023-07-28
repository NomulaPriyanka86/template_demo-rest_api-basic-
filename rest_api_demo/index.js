const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send("this is home enter any extra url")
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})


app.listen(3000, () => {
    console.log("ON PORT 3000!")
})
