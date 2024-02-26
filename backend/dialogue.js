const mongoose = require('mongoose');

const dialogueSchema= mongoose.Schema({
        answer:String
});

const dialogueCollection = mongoose.model("dialogues",dialogueSchema);

module.exports = dialogueCollection;