const mongoose = require('mongoose');

const codeSchema= mongoose.Schema({
        answer:String
});

const codeCollection = mongoose.model("codes",codeSchema);

module.exports = codeCollection;