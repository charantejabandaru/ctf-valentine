const mongoose = require('mongoose');

const translateSchema= mongoose.Schema({
        answer:String
});

const translateCollection = mongoose.model("translates",translateSchema);

module.exports = translateCollection;