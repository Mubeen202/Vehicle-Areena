const router = require('express').Router()
const rentCtrl = require("../controller/rentCars/rentCntr");
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const {rentPostValidationSchema, validate} = require('../controller/helper/rentValidation');

 
router.get("/rentVehicle", rentCtrl.getRentCars);

router.post("/rentVehicle",auth, authAdmin,rentPostValidationSchema(),validate, rentCtrl.createRentCar);

router.delete("/rentVehicle/:id",auth, authAdmin, rentCtrl.deleteRentCar)

router.put("/rentVehicle/:id", auth, authAdmin, rentCtrl.updateRentalCar) 

module.exports = router

