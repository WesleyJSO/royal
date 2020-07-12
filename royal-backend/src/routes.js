const express = require(`express`)

const ClientController = require(`./controllers/ClientController`)

// const ClientValidation = require(`./validations/ClientValidation`)

const routes = express.Router()

routes.get(`/client`, ClientController.get) // ClientValidation.get(),

module.exports = routes
