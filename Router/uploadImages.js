const express = require('express')
const router = express.Router()
const cloudinary = require("cloudinary").v2;
const bodyParser = require('body-parser');
const fs = require('fs')
const multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })




// we will upload image on cloudinary
cloudinary.config({
    cloud_name: "dwjeq9g3h",
    api_key: "582348411782131",
    api_secret: "XLGbYeRRxM4qyg54K6fHz-9HavY",
  })

async function uploadToCloudinary() {
  // locaFilePath :
  // path of image which was just uploaded to "uploads" folder

  // filePathOnCloudinary :
  // path of image we want when it is uploded to cloudinary
    const file= req.files.file;
    console.log(file)
    cloudinary.uploader.upload(file, {folder: "test"}, async(err, result)=>{
    if(err) throw err;
    return{public_id: result.public_id, url: result.secure_url}
})
  .catch((error) => {
    // Remove file from local uploads folder 
   
    return {message: "Fail",};
  });
}



router.post('/profile', upload.array('profile', 3), async (req, res, next) => {
    // req.files is array of `profile-files` files
    // req.body will contain the text fields, if there were any
     const a= uploadToCloudinary();
     res.json(a)

    

})
   

 module.exports = router;