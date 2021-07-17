import mongoose from 'mongoose'
import validator from "validator"

const schema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        trim: true 
    },
    message: { 
        type: String, 
        required: true, 
        trim: true 
    },
}, {
    timestamps: true
})

export default mongoose.models.Mensaje || mongoose.model('Mensaje', schema)