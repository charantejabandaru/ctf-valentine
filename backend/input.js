const mongoose = require('mongoose');

const inputSchema= mongoose.Schema({
        answer:String
});

const inputCollection = mongoose.model("inputs",inputSchema);

module.exports = inputCollection;