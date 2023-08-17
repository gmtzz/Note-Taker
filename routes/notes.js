

const router=require("express").Router()
const db = require("../db/db.json")
const fs = require("fs")
const {
    v4:uuidv4
}=require("uuid")
router.get ("/",(req,res)=> res.status(200).json(db))





module.exports=router