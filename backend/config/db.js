const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("connected with DB");
    }
    catch(error) {
        console.log(error);
    }
}