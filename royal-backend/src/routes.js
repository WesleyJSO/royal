const express = require(`express`)

const ClientController = require(`./controllers/ClientController`)
const PlanController = require(`./controllers/PlanController`)

// const ClientValidation = require(`./validations/ClientValidation`)

const routes = express.Router()

routes.get(`/client`, ClientController.get) // ClientValidation.get(),
routes.get(`/client/:id`, ClientController.getId)
routes.get(`/client/:cgccpf`, ClientController.getCgccpf)

routes.get(`/plan`, PlanController.get)

module.exports = routes
