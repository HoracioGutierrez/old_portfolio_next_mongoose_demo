import dbConnect from "../../../db/connect"
import Mensaje from "../../../models/Mensaje"
import nc from "next-connect"

const handler = nc()

handler.post(async (req, res) => {

    const { name, email, message } = req.body

    try {
        await dbConnect()

        const new_mensaje = { name, email, message }

        await new Mensaje(new_mensaje).save()

        res.json({ ok: true, data: new_mensaje, error: null })

    } catch (error) {
        res.status(500).json({ ok: false, data: null, error })
    }
})

export default handler