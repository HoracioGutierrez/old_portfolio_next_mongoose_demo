import dbConnect from "../../../db/connect"
import Demo from "../../../models/Demo"
import nc from "next-connect"

const handler = nc()

handler.get(async(req,res)=>{
    try {
        await dbConnect()
        const demos = await Demo.find({})
        res.json({ok:true,data:demos,error:null})
    } catch (error) {
        res.status(500).json({ok:false,data:null,error})
    }
})


handler.post(async (req, res) => {
    const {title} = req.body
    try {
        await dbConnect()
        const new_demo = await new Demo({title}).save()
        res.json({ok:true,data:new_demo,error:null})
    } catch (error) {
        res.status(500).json({ok:false,data:null,error})
    }
})

export default handler