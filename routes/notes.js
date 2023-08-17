

const router=require("express").Router()
const db = require("../db/db.json")
const fs = require("fs")
const {
    v4:uuidv4
}=require("uuid")
router.get ("/",(req,res)=> res.status(200).json(db))


router.post("/",(req,res)=>{
    const{
        title,
        text
    }=req.body
    if (!title||!text){
        return res.status(400).json({
            message:"Unable to save note"
        })
    }
    const postedNote = {
        title,
        text,
        id: uuidv4()
    }
    const noteContent= {
        status:"Success",
        body: postedNote
    }
    db.push(postedNote)
    fs.writeFileSync("./db/db.json",JSON.stringify(db),(error)=>{
        if(error){
            console.error(error)
        }
        console.log("Note Posted")
    })
    res.json(noteContent)
})


module.exports=router