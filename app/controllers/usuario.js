const usuarioModel = require("../models/usuario");


const getUsuarios = async (req, res) => {

  try {
    const listAll = await usuarioModel.find({});
    res.send(listAll);
  } catch (error) {
    res.send(error);
  }
};


const searchEmail = async (req, res) => {
  try {
    const { correo_usuario } = req.body;
    const usuario = await usuarioModel.findOne({ correo_usuario });
    if (usuario.id != null) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    res.send(error);
  }
};



const createUsuario = async (req, res) => {
  try {
    const {
      nombre_usuario,
      contrasenia_usuario,
      correo_usuario,
    } = req.body;
    const resDetail = await usuarioModel.create({
      nombre_usuario,
      contrasenia_usuario,
      correo_usuario,
    });
    res.send({ data: resDetail });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};





const updateUsuario = async (req, res) => {
  try {

    const {
      _id,
      nombre_usuario,
      usuario_usuario,
      contrasenia_usuario,
      correo_usuario,
      
    } = req.body;
    let resDetail

    if (contrasenia_usuario == null) {
      resDetail = await usuarioModel.findOneAndUpdate(
        { _id },
        { nombre_usuario, usuario_usuario, correo_usuario,  },
      );
    } else {
      const salt = await bcrypt.genSaltSync(11);
      const hash = await bcrypt.hashSync(contrasenia_usuario, salt);
      resDetail = await usuarioModel.findOneAndUpdate(
        { _id },
        { nombre_usuario, usuario_usuario, contrasenia_usuario: hash, correo_usuario,  }
      );

    }

    res.send({ data: resDetail });
  } catch (error) {
    res.send(error);
  }
};


const deleteUsuario = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const resDetail = await usuarioModel.findOneAndDelete({ _id });
    const listAll = await usuarioModel.find({});
    res.send({ data: listAll });
  } catch (error) {
    res.send(error);
  }
};

const inicioSesion = async (req, res, next) =>{
  try{
    const {correo_usuario, contrasenia_usuario} = req.params;
    const usuario = await usuarioModel.findOne({ correo_usuario });
      if (usuario.contrasenia_usuario === contrasenia_usuario) {
        res.send(true);
      } else {
        res.send(false);
      }
  } catch (error) {
    res.send(error);
  }
}

module.exports = { getUsuarios, searchEmail, createUsuario, updateUsuario, deleteUsuario,inicioSesion};
