const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/connection")
const session = require("express-session")

const categoriesController = require("./categories/CategoriesController")
const articleController =  require("./articles/ArticleController")
const usersController = require("./users/UsersController")

const Article = require("./articles/Article")
const Category = require("./categories/Category")
const User = require("./users/User")



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.use(session({
    secret: "qualquercoisa", cookie: {maxAge: 3000000000}
}))

app.use("/", categoriesController)
app.use("/", articleController)
app.use("/", usersController)

app.get("/", (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {

        Category.findAll().then(categories => {
            res.render("index", {articles: articles, categories: categories})
        })
    })
})

app.get("/:slug", (req, res) => {
    var slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined) {
            Category.findAll().then(categories => {
                res.render("article", {article: article, categories: categories})
            })   
        }else{
            res.redirect("/")
        }
    }).catch(error => {
        res.redirect("/") 
    })
})

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then( category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render("index", {articles: category.articles, categories: categories})
            })
        }else {
            res.redirect("/")
        }
    }).catch(error => {
        res.redirect("/")
    })
})

app.listen("8484", () => {
    console.log("O servidor está rodando!")
})