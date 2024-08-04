const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyparser = require("body-parser");
const db = require("./config/db");

const app=express();
dotenv.config({ path: "./config/.env"});
app.use(cors({
    origin: '*'
}));
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());
app.use(require("./controller/user"));

db();

app.listen(4200,()=>{
    console.log("running on port 4200");
});