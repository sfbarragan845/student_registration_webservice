const express = require('express')
const router = express.Router();
const { getEstudiantes , getEstudiante, createEstudiante, searchCedula, searchEmail,updateEstudiante, deleteEstudiante,uploadComprobante, updateEstadoComprobante,actualizarDatosEstudiante,getEstudiantesAll,getEstudiantesComprobante, getEstudiantesInscripcion,getEstudiantesComprobantesAcept} = require('../controllers/estudiante')

router.get('/', getEstudiantes)

router.get('/all/', getEstudiantesAll)

router.get('/comprobante/', getEstudiantesComprobante)

router.get('/comprobante-aceptados/', getEstudiantesComprobantesAcept)

router.get('/inicio_secion', getEstudiantes)

router.get('/inscripcion', getEstudiantesInscripcion)


router.get('/inicio_secion', getEstudiantes)

router.get('/:_id', getEstudiante)

router.post('/', createEstudiante)

router.post('/searchCedula', searchCedula)

router.post('/estudianteid', searchCedula)

router.post('/searchEmail', searchEmail)

router.patch('/', updateEstudiante)

router.put('/:_id', uploadComprobante)

router.put('/estado_comprobante/:_id', updateEstadoComprobante)

router.delete('/:_id', deleteEstudiante)

router.put("/inscripcion/:_id", actualizarDatosEstudiante);

module.exports = router
