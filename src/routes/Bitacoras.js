import { check } from'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJWT, generarJWT } from '../middlewares/validarJWT.js';
import { httpBitacoras } from '../controllers/Bitacoras.js';
import { bitacoraHelper } from '../helpers/Bitacoras.js';
import { Router } from 'express';

// const { check } = require("express-validator");
// const { validarCampos } = require("../middlewares/validar-campos");
// const { validarJWT, generarJWT } = require("../middlewares/validarJWT");
// const { httpBitacoras } = require("../controllers/Bitacoras");
// const { Router } = require("express");
// const { bitacoraHelper } = require("../helpers/Bitacoras");

const routers = Router()
routers.get("/listar",[
    validarJWT
    ],httpBitacoras.getListar)
    
// -----------------------------------------------------------------------------------------------------
routers.get("/ListarBitacoras",[
validarJWT
],httpBitacoras.getListarTodo)

// -----------------------------------------------------------------------------------------------------
routers.get("/ListaPorFicha/:Id_Ficha",[
check('Id_Ficha', 'El id no es valido').isMongoId(),
validarCampos,
validarJWT
], httpBitacoras.getListarBitacorasPorFicha)

// -----------------------------------------------------------------------------------------------------
routers.get("/listarPorAprendiz/:Id_Aprendiz",[
check('Id_Aprendiz','El id no es valido').isMongoId(),
validarCampos,
validarJWT
],httpBitacoras.getLitarBitacorasporAprendiz)
// 
// ----------------------------------------------------------------------------------------------------
routers.post("/Insertar",[
    // validarJWT,
    // check('Id_Aprendiz','El id aprendiz no es valido').isMongoId,
    check('Id_Aprendiz', 'El campo id del aprendiz es onbligatorio').notEmpty(),
    // check('FechaHora', 'El campo de fecha y hora es obligatorio').notEmpty(),
    check("Id_Aprendiz").custom(bitacoraHelper.existeIdAprendiz),
    check("Id_Aprendiz").custom(bitacoraHelper.unicoIdAprendiz),
    validarCampos,
],httpBitacoras.postInsertaBitacora)

// -------------------------------------------------------------------------------------------------------
routers.put("/Actualizar/:id",[
    check('id','El id es invalido').isMongoId(),
    validarCampos,
    validarJWT
],httpBitacoras.putModificarBitacora)

export default routers