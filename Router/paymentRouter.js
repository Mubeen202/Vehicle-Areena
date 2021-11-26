const router = require('express').Router()
const paymentCtrl = require('../controller/payment/paymentCntrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/payment', auth, paymentCtrl.createPayment)

router.get('/payment', auth, authAdmin, paymentCtrl.getPayments)
  


module.exports = router
