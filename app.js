const express = require('express')
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.listen(1998, async()=>{console.log('app is running on port 1998.....')});


app.get('/', async(req, res)=>{
    res.status(200).send({"message":"Hello Wolrd"})
})

app.get('/defame', async(req, res)=>{
    res.status(200).send({"message":"Shame on you"})
}) 

module.exports = app;