import usuario  from '../models/usuario';
import bcrypt   from 'bcrypt';

const salt = 10;

var controller = {
    registarUsuario: async(req, res) => {
        const body = {
            nombre:       req.body.nombre,
            email:        req.body.email,
            misfavoritos: req.body.favoritos
        };

        body.contrasena =  bcrypt.hashSync(req.body.contrasena, salt);

        try{

            const registroUsuario = await usuario.create(body);

            if(registroUsuario){
                return res.status(200).json(registroUsuario);
            }

        }catch(error){
            return res.status(500).json({
                mensaje: 'Error del servidor',
                error
            });
        }
    },

    agregarFavorito: async(req, res) => {
        
        const idUser = req.params.id;

        const nuevoFavorito = req.body.favorito;

        const usuarioDB = await usuario.findById({_id: idUser});

        if(usuarioDB){
            try{
                usuarioDB.misfavoritos.push(nuevoFavorito);

                usuarioDB.save();

                return res.status(200).json(usuarioDB);

            }catch(error){
                return res.status(500).json({
                    mensaje: 'Error del servidor',
                    error
                });
            }
        }

        return res.status(400).json({
            mensaje: 'Usuario no registrado'
        });

    }
}

export default controller;