import dbConnect from "../../../db/connect"
import Demo from "../../../models/Demo"
import nc from "next-connect"

const handler = nc()

handler.get(async (req, res) => {
    try {
        await dbConnect()

        const query = { active: true }

        const projection = { 
            _id: 0, 
            title: 1, 
            subtitle: 1, 
            slug: 1, 
            id: 1, 
            "vote_data.current_votes": 1, 
            difficulty: 1, 
            short_desc: 1 
        }

        const demos = await Demo.find(query,projection)
        res.json({ ok: true, data: demos, error: null })

    } catch (error) {
        res.status(500).json({ ok: false, data: null, error })
    }
})


handler.post(async (req, res) => {

    const { title, subtitle, short_desc, long_desc, difficulty, vote_data, tags } = req.body

    try {

        await dbConnect()

        const new_demo = { title, subtitle, short_desc, long_desc, difficulty, vote_data, tags }
        
        await new Demo(new_demo).save()

        return res.json({ ok: true, data: new_demo, error: null })

    } catch (error) {
        res.status(500).json({ ok: false, data: null, error })
    }
})

export default handler