const mongoose = require('mongoose');

const mythologySchema= mongoose.Schema({
        answer:String
});

const mythologyCollection = mongoose.model("mythologies",mythologySchema);

module.exports = mythologyCollection;