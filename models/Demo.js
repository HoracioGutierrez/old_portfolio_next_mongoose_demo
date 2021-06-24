import mongoose from 'mongoose'
import validator from "validator"

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "El titulo del demo es obligatorio"],
        minLength: [2, "El titulo del demo tiene que tener por lo menos 2 caracteres"],
        maxLength: [100, "El titulo del demo tiene que tener 100 caracteres como maximo"],
        validate : {
            validator : v => {
                return validator.isAlpha(v,"es-ES",{ignore:"\s"})
            },
            message : "El titulo tiene que contener solo caracteres alfabeticos"
        }
    }
}, {
    timestamps: true
})

export default mongoose.models.Demo || mongoose.model('Demo', schema)