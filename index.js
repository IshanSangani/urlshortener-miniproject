const express = require("express")
const app = express()
const urlRoute = require("./routes/url");
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/urlShortener")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine","ejs")

app.use("/url",urlRoute);

app.listen(3000);
console.log("working on port 3000")