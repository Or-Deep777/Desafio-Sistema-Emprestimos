const { Router } = require('express')
const clienteController = require('../controllers/clienteController')

const router = Router()

router.post('/clientes',clienteController.create)
router.get('/clientes',clienteController.getAll)
router.get('/clientes/:id',clienteController.getById)
router.put('/clientes/:id',clienteController.update)
router.delete('/clientes/:id',clienteController.delete)

router.post('/cliente-emprestimos',clienteController.analyzeLoans)

module.exports = router