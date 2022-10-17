const express = require("express")
const app = express()

publicPath = {root: __dirname + "/public"}

//ejs layouts
app.set("view engine","ejs")
// app.use(expressLayouts)


app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/signup", (req, res)=>{
    res.sendFile("signup.html", publicPath)
})

app.get("/signin", (req, res)=>{
    res.sendFile("signin.html", publicPath)
})

app.listen(3000)