const mongoose = require("mongoose");
//JWT_SECRET = addjsonwebtokensecretherelikeQuiscustodietipsoscustodes;
mongoose.connect("mongodb+srv://Mubeen:fypProject@cluster0.ia3cl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log("database connected successfully")
})
module.exports = mongoose;