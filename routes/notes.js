

const router=require("express").Router()
const db = require("../db/db.json")
const fs = require("fs")
const {
    v4:uuidv4
}=require("uuid")
router.get ("/",(req,res)=> res.status(200).json(db))
// when there is no text or title, throws out an error message 

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
    //success message when note is posted
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
router.delete('/:id',(req,res)=>{
    const noteId =req.params.id
    console.log(noteId)
})
//research filter method or splice and find index
module.exports=router
