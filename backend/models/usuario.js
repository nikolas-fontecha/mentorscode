import mongoose from 'mongoose';

const Schema =  mongoose.Schema;

const usuarioSchema = new Schema({
    nombre:       {type: String},
    email:        {type: String, required: true},
    contrasena:   {type: String, required: true},
    misfavoritos: {type: Array},
    mentor:       {type: Boolean, default: false}
});

usuarioSchema.methods.toJSON = fucntion(){
    var obj = this.toObject();
    delete obj.contrasena;
    return obj;
}

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;