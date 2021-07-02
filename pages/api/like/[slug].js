import dbConnect from "../../../db/connect"
import Demo from "../../../models/Demo"
import nc from "next-connect"
import requestIp from "request-ip"

const handler = nc()

handler.post(async (req, res) => {

    const { slug } = req.query

    const ip = requestIp.getClientIp(req)

    try {

        await dbConnect()

        const new_vote = {
            created_at: new Date(),
            ip
        }

        const query = { slug }

        const update = {
            $inc: {
                "vote_data.current_votes.up": 1
            },
            $push: {
                "vote_data.done": new_vote
            }
        }

        const op = await Demo.updateOne(query, update)

        res.json({ ok: true, data: "OK", error: null })

    } catch (error) {
        res.status(500).json({ ok: false, data: null, error })
    }
})

export default handler