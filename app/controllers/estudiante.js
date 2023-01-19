const estudianteModel = require("../models/estudiante");

const getEstudiantes = async (req, res) => {
  try {
    const listAll = await estudianteModel.find({});
    res.send(listAll);
  } catch (error) {
    res.send(error);
  }
};

const searchCedula = async (req, res) => {
  try {
    const { cedula_estudiante } = req.body;
    const estudiante = await estudianteModel.findOne({ cedula_estudiante  });
    if (estudiante._id != null) {
      res.send(estudiante);
    } else {
      res.send("Not estudent");
    }
  } catch (error) {
    res.send(error);
  }
};

const searchEmail = async (req, res) => {
  try {
    const { correo_estudiante } = req.body;
    const estudiante = await estudianteModel.findOne({ correo_estudiante });
    if (estudiante._id != null) {
      res.send(estudiante);
    } else {
      res.send("Not estudent");
    }
  } catch (error) {
    res.send(error);
  }
};


const getEstudiante = async (req, res) => {
  try {
    const { _id } = req.body;
    const estudiante = await estudianteModel.findOne({ _id });
    res.send({ data: estudiante });
  } catch (error) {
    res.send(error);
  }
};



const createEstudiante = async (req, res) => {
  try {
    const {
      nombre_estudiante,
      cedula_estudiante,
      correo_estudiante,
      telefono_estudiante,
      tipo_estudiante,
      curso_estudiante
    } = req.body.estudiante;

    const resDetail = await estudianteModel.create({
      nombre_estudiante,
      cedula_estudiante,
      correo_estudiante,
      telefono_estudiante,
      tipo_estudiante,
      curso_estudiante,
    } );
   

    res.send({ data: resDetail });
  } catch (error) {
    console.log(req.body);
    console.error(error);
  }
};

const updateEstudiante = async (req, res) => {
  try {
    const {
      _id,
      nombre_estudiante,
      cedula_estudiante,
      correo_estudiante,
      telefono_estudiante,
      tipo_estudiante,
      curso_estudiante
    } = req.body;
    let resDetail = await estudianteModel.findByIdAndUpdate(
      { _id },
      { nombre_estudiante,
        cedula_estudiante,
        correo_estudiante,
        telefono_estudiante,
        tipo_estudiante,
        curso_estudiante },
    );
    res.send({ data: resDetail });
  } catch (error) {
    res.send(error);
  }
};


const deleteEstudiante = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const resDetail = await estudianteModel.findByIdAndDelete({ _id });
    const listAll = await estudianteModel.find({});
    
    res.send({ data: listAll });
  } catch (error) {
    res.send(error);
  }
};


const uploadComprobante = async(req, res)=> {
  try{
    const  cedula_estudiante = req.params;
    const  comprobante = req.body;
    console.log(req.params);
    let resDetail = await estudianteModel.findOneAndUpdate(
      { cedula_estudiante },
       comprobante,
    );
    res.send({ data: resDetail });
  }catch (error) {
    res.send(error);
  }
}

const updateEstadoComprobante = async(req, res)=>{
  try{
    const _id = req.params._id;
    const estado_comprobante = req.body;
    console.log(req.params._id);
    let resDetail = await estudianteModel.findByIdAndUpdate(
      { _id },
      estado_comprobante,
    );
    res.send({ data: resDetail });
  }catch (error) {
    res.send(error);
  }
}


module.exports = { getEstudiantes, getEstudiante, searchEmail, searchCedula, createEstudiante, updateEstudiante, deleteEstudiante, uploadComprobante,updateEstadoComprobante };
