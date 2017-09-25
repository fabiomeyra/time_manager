const Chamado = require('./chamado')
const _ = require('lodash')

Chamado.methods(['get', 'post', 'put', 'delete'])
Chamado.updateOptions({new: true, runValidator:true})
Chamado.after('post', sendErrorsOrNext)
Chamado.after('put', sendErrorsOrNext)


function sendErrorsOrNext(req, res, next) {

	const bundle = res.locals.bundle
	bundle.errors ? res.status(500).json({errors} = parseErrors(bundle.errors)) : next()
}

function parseErrors(nodeRestFulErrors) {
	const errors = []
	_.forIn(nodeRestFulErrors, error =>errors.push(error.message))
	return errors
}


module.exports = Chamado;