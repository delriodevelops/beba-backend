import { Router } from "express";
import { db } from "../../tools/firebase.config.js";
const router = Router()

router.get('',async function(req,res){
    const querySnapshot = (await db.collection('rooms').get()).docs.map(el=>el.data())
    return res.json(querySnapshot)
})

export default router