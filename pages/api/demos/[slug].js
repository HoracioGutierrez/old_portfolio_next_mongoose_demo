import dbConnect from "../../../db/connect"
import Demo from "../../../models/Demo"
import nc from "next-connect"

const handler = nc()

handler.get(async (req, res) => {

    const slug = req.query.slug
    const type = req.query.type

    try {

        await dbConnect()

        const query = { slug }

        let projection = {
            _id: 0
        }

        if (type == "short") {
            projection.title = 0
            projection.subtitle = 0
            projection.slug = 0
            projection.id = 0
            projection.difficulty = 0
            projection.short_desc = 0
            projection.thumbnail_url = 0
            projection.vote_data = 0
        }

        const demo = await Demo.findOne(query, projection)
        res.json({ ok: true, data: demo, error: null })


    } catch (error) {
        res.status(500).json({ ok: false, data: null, error })
    }
})


export default handler