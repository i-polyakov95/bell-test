const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('cors')());

app.get('/*', (req, res, next) => {
    res.send(require('./db.json'))
})

app.listen(3000, function () {
    console.log("API has been started!");
});
