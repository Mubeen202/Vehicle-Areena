const mongoose = require('mongoose')


const buyCarSchema = new mongoose.Schema({
    buyCar_id:{
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
    price:{
        type: Number,
        trim: true,
        required: true
    },
    year:{
        type: Number,
        trim: true,
        required: true
    },
    kmsDriven:{
        type: Number,
        trim: true,
        required: true
    },
    carModel:{
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
    register:{
        type: String,
        required: true
    },
    condition:{
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
    checked:{
        type: Boolean,
        default: false
    },
   
}, {
    timestamps: true //important
})


module.exports = mongoose.model("BuyCar", buyCarSchema)