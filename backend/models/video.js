import mongoose from 'mongoose';

const Schema =  mongoose.Schema;

const comentariosSchema = new Schema({
    descripcion:   {type: String, required: true},
    nombreUsuario: {type: String},
    idUsuario:     {type: String, required: true},
    fecha:         {type: Date, default: Date.now}
});

const videoSchema = new Schema({
    origen:       {type: String},
    comentarios:  [comentariosSchema],  
    likes:        {type: Array},
    categoria:    {type: Array},
    titulo:       {type: String, required: true},
    descripcion:  {type: String},
    comodin:      {type: String, default: 'comodin'},
    mentor: {type: String}
});

const video = mongoose.model('video', videoSchema);

export default video;