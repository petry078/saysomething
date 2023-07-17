const express = require('express')
const app = express()
const port = 4567
let something = "something"

//json parse
app.use(express.json());

//npm start log
app.listen(port, () => {
    console.log(`port ${port}`)
})


//http methods
//get
app.get("/", (req, res) => {
    res.json(something)
})

//post
app.post("/", (req, res) => {
    const somethingNew = req.body.string
    something = somethingNew
    return res.json({message: 'said.'})
    })

//end of http methods
