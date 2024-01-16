const express = require("express");
const app = express();
const PORT = 1337;
const path = require("path");
const shortId = require("shortid")

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})
app.set("view engine",'hbs');
app.set("views",path.join(__dirname,"views"));

app.use(express.static("public"));
app.use(express.urlencoded({extended :false}));
var originalURL ;

app.get('/',(req,res)=>{
    const shortURL = shortId.generate;
    res.render('index',{
        shortURL:((originalURL!==undefined) ?shortURL:" "),
    })
})

app.post('/shortURL', (req,res)=>{
    originalURL = req.body.fullUrl;
    console.log(originalURL);
    res.redirect('/');
})



app.get('/:shortURL',(req,res)=>{
    res.redirect(originalURL);
})

