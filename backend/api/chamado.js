const restful = require('node-restful')
const mongoose = restful.mongoose
const beautifyUnique = require('mongoose-beautiful-unique-validation')

const tarefaSchema = new mongoose.Schema({
	nome: {type: String, required: true},
	dataCriacao: {type: Date},
	dataConclusao: {type: Date},
	parada: {type: Boolean},
	ultimoStopTime: {type: Date},
	status: {type: String, uppercase: true,
		enum: ['FINALIZADA', 'EM ANDAMENTO', 'PARADA']}
})

const chamadoSchema = new mongoose.Schema({

	numero: {type: Number, required: 'Informe o Número de Chamado', unique: 'chamado {VALUE} já existe'},
	dataCriacao: {type: Date},
	ultimaAlteracao: {type: Date},
	tarefas: [tarefaSchema]
})

chamadoSchema.plugin(beautifyUnique)

module.exports = restful.model('Chamado', chamadoSchema)
