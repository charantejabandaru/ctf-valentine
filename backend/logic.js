const mongoose = require('mongoose');

const logicSchema= mongoose.Schema({
        answer:String
});

const logicCollection = mongoose.model("logics",logicSchema);

module.exports = logicCollection;