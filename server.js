const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const app = express()
const uploadfile = require('express-fileupload')

const fs = require('fs')
require('dotenv').config()


const bodyParser = require('body-parser')
app.use(express.urlencoded({ extented: true }))
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(cookieParser())
app.use(
  uploadfile({
    useTempFiles: true,
  }),
)
global.__basedir = __dirname

var corsOptions = {
  origin: 'http://localhost:5000',
}

app.use(cors(corsOptions))

const database = require('./configration/db')
const userApi = require('./Router/userApi')
const category = require('./Router/categoryRouter')
const upload = require('./Router/uploadRouter')
const multer1 = require('./Router/uploadImages')
const rentCars = require('./Router/rentCarsRouter')
const buyCars = require('./Router/buyCarRouter')
const payment = require('./Router/paymentRouter')


app.use(bodyParser.json())
app.use('/', userApi)
app.use('/', category)
app.use('/', upload)
app.use('/', multer1)
app.use('/', rentCars)
app.use('/', buyCars)
app.use('/', payment)



const port = process.env.port || 5000
app.listen(port, () => {
  console.log('server is started on port:' + port)
})



