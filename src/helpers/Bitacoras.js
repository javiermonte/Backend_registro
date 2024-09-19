import Bitacora from '../models/Bitacoras.js'

const bitacoraHelper = {
    existeIdAprendiz: async (Id_Aprendiz)=>{
    const exists = await Bitacora.find({Id_Aprendiz})
    if(!exists){
        throw new Error("EL ID del aprendiz no existe")
    }
},
unicoIdAprendiz: async (Id_Aprendiz)=>{
    const unico = await Bitacora.findById({Id_Aprendiz})
    if(unico){
        throw new Error("El id del aprendiz ya existe")
    }
}
}
export {bitacoraHelper}