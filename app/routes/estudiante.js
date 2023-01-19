const express = require('express')
const router = express.Router();
const { getEstudiantes , getEstudiante, createEstudiante, searchCedula, searchEmail,updateEstudiante, deleteEstudiante,uploadComprobante, updateEstadoComprobante} = require('../controllers/estudiante')

router.get('/', getEstudiantes)

router.get('/inicio_secion', getEstudiantes)


router.get('/:_id', getEstudiante)

router.post('/', createEstudiante)

router.post('/searchCedula', searchCedula)

router.post('/searchEmail', searchEmail)

router.patch('/', updateEstudiante)

router.put('/:_id', uploadComprobante)

router.put('/estado_comprobante/:_id', updateEstadoComprobante)

router.delete('/:_id', deleteEstudiante)


module.exports = router
