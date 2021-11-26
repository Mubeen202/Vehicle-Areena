const mongoose = require('mongoose')


const rentCarSchema = new mongoose.Schema({
    rentCar_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    dailyPrice:{
        type: Number,
        trim: true,
        required: true
    },
    weeklyPrice:{
        type: Number,
        trim: true,
        required: true
    },
    monthlyPrice:{
        type: Number,
        trim: true,
        required: true
    },
    mileage:{
        type: String,
        trim: true,
        required: true
    },
    gas:{
        type: String,
        trim: true,
        required: true
    },
    gearType:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    seats:{
        type: Number,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
    onRent:{
        type: Boolean,
        default: true
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("RentCars", rentCarSchema)