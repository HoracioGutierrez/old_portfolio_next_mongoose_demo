import dbConnect from "../../../db/connect"
import Mensaje from "../../../models/Mensaje"
import nc from "next-connect"
import nodemailer from "nodemailer"
import template from "./template"

const handler = nc()

handler.post(async (req, res) => {

    const { name, email, message } = req.body

    try {
        await dbConnect()

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "horacio.estevez@gmail.com",
                pass: "opagjugzthhxnylt"
            }
        })

        const mailOptions = {
            from: email,
            to: "horacio.estevez@gmail.com",
            subject: `Nuevo mensaje del portfolio!`,
            text: message,
            html : template(email,message)
        }

        const res_mail = await transporter.sendMail(mailOptions)
        
        const new_mensaje = { name, email, message }

        await new Mensaje(new_mensaje).save()

        res.json({ ok: true, data: new_mensaje, error: null })

    } catch (error) {
        res.status(500).json({ ok: false, data: null, error })
    }
})

export default handler