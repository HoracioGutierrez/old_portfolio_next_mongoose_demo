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
    },
    subtitle: {
        type: String,
        required: [true, "El subtitulo del demo es obligatorio"],
        minLength: [2, "El subtitulo del demo tiene que tener por lo menos 2 caracteres"],
        maxLength: [150, "El subtitulo del demo tiene que tener 100 caracteres como maximo"],
        validate : {
            validator : v => {
                return validator.isAlpha(v,"es-ES",{ignore:"\s"})
            },
            message : "El Subtitulo tiene que contener solo caracteres alfabeticos"
        }
    },
    short_desc: {
        type: String,
        required: [true, "La descripcion corta del demo es obligatoria"],
        minLength: [2, "La descripcion corta del demo tiene que tener por lo menos 2 caracteres"],
        maxLength: [300, "La descripcion corta del demo tiene que tener 300 caracteres como maximo"]
    },
    long_desc: {
        type: Array,
        required: [true, "La descripcion larga del demo es obligatoria"]
    },
    difficulty : {
        type : Number,
        required: [true, "La dificultad del demo es obligatoria"],
    },
    vote_data : {
        type : Object,
        required: [true, "La info de votacion del demo es obligatoria"],
    },
    tags : {
        type : Array,
        required: [true, "Los tags del demo son obligatorios"],
    }
}, {
    timestamps: true
})

export default mongoose.models.Demo || mongoose.model('Demo', schema)