const { Router } = require("express")
const express = require("express")
const expressLayouts = require("express-ejs-layouts")

const app = express()


//ejs layouts
app.use(expressLayouts)
app.set("view engine","ejs")
// app.use(expressLayouts)

app.get("/", (req, res)=>{
    res.render("home", {title:"home"})
})

 app.get("/signup", (req, res)=>{
    res.render("signup", {title:"sign up"})
})

app.get("/signin", (req, res)=>{
    res.render("signin", {title:"sign in"})
}) 

app.post("/signinpost", (req, res)=>{
    console.log(req.body)
    res.sendStatus(200)
})

app.get("/trypost", (req, res)=>{
    res.status(200)
    .render('trypost', {title:"trypost"})
    console.log(req.body)
})



app.listen(3000)