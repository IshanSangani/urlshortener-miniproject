const express = require("express")

const app = express()
const router = express.Router()
const shorturl = require("../models/urlSchema")


router.get("/",async function(req,res){
    const shortUrls = await shorturl.find()
    res.render("index",{shortUrls: shortUrls})
})

router.post("/shortUrl",async (req,res)=>{
    await shorturl.create({full: req.body.fullUrl})
    res.redirect("/url")
})

router.get("/:shortUrl",async (req,res)=>{
 const shortUrl =  await shorturl.findOne({short:req.params.shortUrl}) 
 if(shortUrl==null) return res.sendStatus(400);

 shortUrl.clicks++;
 await shortUrl.save();
 
 res.redirect(shortUrl.full);
})



module.exports = router;