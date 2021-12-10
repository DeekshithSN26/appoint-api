const mongoose = require('mongoose')
const validator = require('validator')

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        default: '',
        validate(value) {
            if (value.length<10) {
                throw new Error("Description should be atleast 10 characters")
            }
        }
    },
    email: { type: String, default: '', required: true },
    mobile: { type: String, default: '', required: true },
    image: { type: String, default: '' },
    fulfilled: { type: Boolean, default: false },
}, {
        timestamps: true
    })



const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = {Appointment};