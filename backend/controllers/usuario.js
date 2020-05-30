import usuario  from '../models/usuario';
import bcrypt   from 'bcrypt';
import jwt      from 'jsonwebtoken';

const salt = 10;

process.env.SCRET_KEY = 'secret';

var controller = {

    loginUsuario: async(req, res) => {
        const email =      req.body.email;
        const contrasena = req.body.contrasena;
        
        const usuarioExiste = await usuario.findOne({ email: email});

        if(usuarioExiste){
            try{
                if(bcrypt.compareSync(contrasena, usuarioExiste.contrasena)){
                    const dataReturn = {
                        _id: usuarioExiste._id,
                        nombre: usuarioExiste.nombre,
                        email: usuarioExiste.email,
                        favoritos: usuarioExiste.misfavoritos
                    };

                    let token = jwt.sign(dataReturn,process.env.SCRET_KEY, {expiresIn: 60 * 60 * 24 *30});

                    return res.status(200).json(token);
                }
            }catch(error){
                return res.status(500).json({
                    mensaje: 'Error del servidor',
                    error
                });
            }
        }

        return res.status(400).json({
            mensaje: 'Usuario no registrado verificar contraseña y/o email'
        });
    
    },

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