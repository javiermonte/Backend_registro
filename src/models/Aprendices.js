import mongoose from "mongoose"

const aprendicesSchema = new mongoose.Schema({
    Documento:{ type:String, require:true, unique:true, min:10},
    Nombre:{type:String, require:true},
    Telefono:{type:String, require:true, unique:true, min:10},
    Email:{type:String, require:true, unique:true},
    Estado:{type:Number, require:true, default:1},
    Id_Ficha: {type:mongoose.Schema.Types.ObjectId,ref:'Ficha'}
})

export default mongoose.model("Aprendiz",aprendicesSchema)
// ElementInternals,telefono
