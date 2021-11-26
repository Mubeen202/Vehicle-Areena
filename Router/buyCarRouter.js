const router = require('express').Router()
const buyCtrl = require("../controller/buyCar/buyCntrl");
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const {rentPostValidationSchema, validate} = require('../controller/helper/rentValidation');

 
router.get("/buyCars", buyCtrl.getBuyCar);

router.post("/buyVehicle",auth, authAdmin, buyCtrl.createBuyCar);

router.delete("/buyVehicle/:id",auth, authAdmin, buyCtrl.deleteBuyCar)

router.put("/buyVehicle/:id", auth, authAdmin, buyCtrl.updateBuyCar) 

module.exports = router

