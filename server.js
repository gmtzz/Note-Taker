
//import express, node, routes, port
const express = require("express")
const path = require("path")
const routes = require("./routes/index.js")
const PORT = process.env.PORT || 3001
const app = express()
//setting up middlewaare
app.use (express.json())
app.use (express.urlencoded({
    extended:true
}))
//Requests are responded with notes html file from public directory
app.use("/api",routes)
app.use(express.static("public"))
app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

//routehandler for GET req, received get request and server responds using index.html
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/index.html"))
})


//sets up server to listen for incoming requests on specified port

app.listen(PORT, function(){
    console.log(`App is listening on: ${PORT}`)
})