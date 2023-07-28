                                            template_demo:

> npm i express
> nodemon index.js
> npm install ejs
> --view_folder:
> ........it contains all the front end (client side rendering) ejs files
> ---INDEX.JS:
> ....loading ejs files into it
> ===app.set('view engine','ejs');......for setting the ejs files

    app.set('views',path.join(__dirname, './views'));

--next loading all the ejs files and calling using api request in index.js
-------hitting an dummy api data i.e data.json without any database by using static data
--first import the json file
--we are acquiring that json data into subbreddit.ejs file
---------hitting the cats api data in the api call into the cats.ejs file through index.js file
------partial folder have header and footer code for readability use for cat.ejs and for home.ejs
=added header and footer ejs file and also added dynamic title for both cats and home page

.

=========================================rest_api_demo===============================================
===getPost.html:
--from here get and post url will be opened as per the data we are entering into it.

--for POST---------app.use(express.urlencoded({extended:true}))-----Should be added at top-----req.body through a form subbmission
--when we are send the data in the form of JSON we use -----app.use(express.json())

======================================NOTE=====================================================
req.params-------------for GET
req.body---------------for POST
