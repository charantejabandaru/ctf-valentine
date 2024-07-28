require("dotenv").config();

const cors = require("cors");

const express = require("express");

const bodyparser = require("body-parser");

const mongoose = require("mongoose");

const app=express();

const stegnoCollection = require("./models/stegno");

const translateCollection = require("./models/translate");

const codeCollection = require("./models/code");

const mythologyCollection = require("./models/mythology");

const logicCollection = require("./models/logic");

const dialogueCollection = require("./models/dialogue");

const inputCollection = require("./models/input");

app.use(cors({
    origin: '*'
}));

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

mongoose.connect(process.env.MONGO_URL, 
    {
                useNewUrlParser: true, 
                useUnifiedTopology: true
    }).then(()=>{console.log("connected with DB")});

app.get("/stegno/:input",async (req,res)=>{
    const result= await stegnoCollection.find({answer: req.params.input});
    if(result[0]){
        return res.json(true);
    }
    else{
        return res.json(false);
    }
},(error)=>{
    if(error){
        return error;
    }
});

app.get("/translate/:input",async (req,res)=>{
    const result= await translateCollection.find({answer: req.params.input});
    if(result[0]){
        return res.json(true);
    }
    else{
        return res.json(false);
    }
},(error)=>{
    if(error){
        return error;
    }
});

app.get("/code/:input",async (req,res)=>{
    const result= await codeCollection.find({answer: req.params.input});
    if(result[0]){
        return res.json(true);
    }
    else{
        return res.json(false);
    }
},(error)=>{
    if(error){
        return error;
    }
});

app.get("/mythology/:input",async (req,res)=>{
    const result= await mythologyCollection.find({answer: req.params.input});
    if(result[0]){
        return res.json(true);
    }
    else{
        return res.json(false);
    }
},(error)=>{
    if(error){
        return error;
    }
});

app.get("/dialogue/:input",async (req,res)=>{
    const result= await dialogueCollection.find({answer: req.params.input});
    if(result[0]){
        return res.json(true);
    }
    else{
        return res.json(false);
    }
},(error)=>{
    if(error){
        return error;
    }
});

app.get("/logic/:input",async (req,res)=>{
    const result= await logicCollection.find({answer: req.params.input});
    if(result[0]){
        return res.json(true);
    }
    else{
        return res.json(false);
    }
},(error)=>{
    if(error){
        return error;
    }
});

app.get("/input/:input",async (req,res)=>{
    const result= await inputCollection.find({answer: req.params.input});
    if(result[0]){
        return res.json(true);
    }
    else{
        return res.json(false);
    }
},(error)=>{
    if(error){
        return error;
    }
});

app.listen(4200,()=>{
    console.log("running on port 4200");
});