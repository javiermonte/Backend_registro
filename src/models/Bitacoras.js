import mongoose from "mongoose"


const bitacoraScheman = new mongoose.Schema({
    Id_Aprendiz: {type: mongoose.Schema.Types.ObjectId, ref:'Aprendiz'},
    Estado: { type: String, enum: ['Asis', 'No Asistio', 'Excusa', 'Pendiente'], default: 'Pendiente' },
    // FechaHora: {type: Date , default:Date.now}
},{ timestamps: true })

export default mongoose.model("Bitacora", bitacoraScheman)
