const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/connection")


app.listen("8484", () => {
    console.log("O servidor está rodando!")
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.get("/", (req, res) => {
    res.send("Rota incial!")
})