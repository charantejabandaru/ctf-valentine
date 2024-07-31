const stegnoCollection = require("../models/stegno");

const translateCollection = require("../models/translate");

const codeCollection = require("../models/code");

const mythologyCollection = require("../models/mythology");

const logicCollection = require("../models/logic");

const dialogueCollection = require("../models/dialogue");

const inputCollection = require("../models/input");


exports.stegno = async (req,res)=>{
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
};

exports.translate = async (req,res)=>{
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
};

exports.code = async (req,res)=>{
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
};

exports.mythology = async (req,res)=>{
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
};

exports.logic = async (req,res)=>{
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
};

exports.dialogue = async (req,res)=>{
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
};

exports.input = async (req,res)=>{
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
};

