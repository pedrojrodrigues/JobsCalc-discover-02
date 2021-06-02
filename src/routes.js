const express = require('express');
const routes = express.Router();

// Usando template engine
const views = __dirname + "/views/"

const profile = {
    name: "Pedro",
    avatar: "https://avatars.githubusercontent.com/u/53826489?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

const jobs = []

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    const job = req.body
    job.createdAt = Date.now() // atribuindo uma nova data

    jobs.push()
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes;