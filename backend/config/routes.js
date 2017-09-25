const express = require('express')

module.exports = (server)=>{

	const router = express.Router()
	server.use('/api', router)

	const chamadoService = require('../api/chamadoService')
	chamadoService.register(router, '/chamados')
}