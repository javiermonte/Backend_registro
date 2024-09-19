import Usuario from '../models/Usuarios.js'


const usuarioHelper = {
    existsEmail: async (Email)=>{
    const exists = await Usuario.findOne({Email:Email})
    if(exists){
        throw new Error("El Email ya existe")
    }
    },
    existsEmail1: async (Email)=>{
        const exists = await Usuario.findOne({Email:Email})
        if(!exists){
            throw new Error("Usuario / Password no son correctos")
        }
},
esEmailid: async (Email, id) => {
    const email = await Usuario.findOne({ Email });
    if (email && email._id.toString() !== id) {
        throw new Error(`El Email ${Email} ya existe`);
    }
}
}

export {usuarioHelper}