const express = require("express");
const UserCntrl = require("../controller/user/controllerApi/userControler");
const auth = require("../middleware/auth");
const router = express.Router();


//--------------------***********user Api***************-----------------------////router.post('/user', usercontroller.registerUser);

//--------------------Register user api------------------//
router.post("/user/register", UserCntrl.registerUser);

//--------------------login api------------------//
router.post("/user/login", UserCntrl.login);

//-------------------logout api------------------//
router.get("/user/logout", UserCntrl.logOut);

//--------------------Refresh Token api------------------//
router.get("/user/refresh_token", UserCntrl.refreshToken);

//--------------------Information user api------------------//
router.get("/user/information", auth, UserCntrl.getUser);

//--------------------Order user api------------------//
router.patch("/user/order", auth, UserCntrl.Order);

//--------------------History user api------------------//
router.get("/user/history", auth, UserCntrl.History);


//------------------------export----------------------//
module.exports = router;