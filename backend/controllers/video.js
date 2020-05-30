import video from '../models/video';

var controller = {

    agregarVideo: async(req, res) => {

        const body = {
            origen:       req.body.origen,
            comentarios:  [],
            likes:        req.body.like,
            categoria:    req.body.categoria,
            titulo:       req.body.titulo,
            descripcion:  req.body.descripcion,
            mentor:       req.body.mentor
        }

        try{
            const registrarVideo = await video.create(body);
         
            if(registrarVideo){
                return res.status(200).json(registrarVideo);
            }

            return res.status(400).json({
                mensaje: 'Error al registrar el video'
            });
            
        }catch(error){
            return res.status(500).json({
                mensaje: 'Error en el servidor'
            });
        }
    },

    agregarComentario: async(req, res) => {
        
        const idVideo = req.params.id;
        
        const body = {
            descripcion:   req.body.descripcion,
            nombreUsuario: req.body.nombre,
            idUsuario:     req.body.idUser
        }
        
        const videoExiste = await video.findById({ _id: idVideo });

        if(videoExiste){

            //return res.status(200).json({mensaje: 'hola guapo'});

            try{
                videoExiste.comentarios.push({
                    descripcion:   body.descripcion,
                    nombreUsuario: body.nombreUsuario,
                    idUsuario:     body.idUsuario
                });

                videoExiste.save();

                return res.status(200).json(videoExiste);
                
            }catch(error){
                return res.status(500).json({
                    mensaje: 'Error en el servidor'
                });
            }
        }

    }
}

export default controller;