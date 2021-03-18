const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
const hbs = require("hbs");

const staticpath = path.join(__dirname,"../public");
const template = path.join(__dirname,"../templates/views");
const partials = path.join(__dirname,"../templates/partials");

app.set("view engine", "hbs");
app.set("views",template);
hbs.registerPartials(partials);
app.use(express.static(staticpath));
app.get("/", (req, res) => { 
    res.render("index");
});
app.get("/about", (req, res) => { 
    res.render("about");
});
app.get("/weather", (req, res) => { 
    res.render("weather");
});

// app.get("/",(req,res)=>{
// res.send("Hello Guys");
//     });

// app.get("/about",(req,res)=>{
//     res.send("Hello Guys");
//     });

// app.get("/Weather",(req,res)=>{
//     res.send("Hello Guys");
//     });

// app.get("/Quotes",(req,res)=>{
//     res.send("Hello Guys");
//     });  
    
// app.get("*",(req,res)=>{
//    res.send("404");
//     });        


app.listen(port,()=>{
    console.log(`hello i am ${port} port`);
});
