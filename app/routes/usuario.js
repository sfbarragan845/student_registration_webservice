const express = require('express')
const router = express.Router();
const { getUsuarios, createUsuario, searchEmail,updateUsuario, deleteUsuario, inicioSesion} = require('../controllers/usuario')

router.get('/', getUsuarios)

router.get('/inicio_sesion/:correo_usuario&:contrasenia_usuario', inicioSesion)

router.post('/', createUsuario)

router.post('/searchEmail', searchEmail)

router.patch('/', updateUsuario)


router.delete('/:_id', deleteUsuario)


module.exports = router
