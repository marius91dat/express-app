const express = require('express')

const app = express()

const port = 8080

app.get('/', function(req,res){
    res.send("OMG")
})

app.listen(port, function() {
 console.log(`Listening on port ${port}`)
})