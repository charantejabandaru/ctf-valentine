const mongoose = require('mongoose');

const stegnoSchema= mongoose.Schema({
        answer:String
});

const stegnoCollection = mongoose.model("stegnos",stegnoSchema);

module.exports = stegnoCollection;