import video from '../models/video';

var controller = {

    agregarVideo: async(req, res) => {

        const body = {
            origen:       req.body.origen,
            comentarios:  [],
            likes:        [],
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
    },

    agregarLike: async(req, res) => {

        var idVideo = req.params.id;

        const like = req.body.like;

        const videoExiste = await video.findById({ _id: idVideo });

        if(videoExiste){
            try{
                const agregarLike = await videoExiste.likes.push(like);

                if(agregarLike){
                    videoExiste.save();
                    return res.status(200).json(videoExiste);
                }
            }catch(error){
                return res.status(500).json({
                    mensaje: 'Error en el servidor'
                });
            }
            

        }

        return res.status(400).json({
            mensaje: 'Error el video no existe'
        });
    },

    obtenerLikes: async(req, res) => {

        const idVideo = req.params.id;

        const traerVideo = await video.findById({ _id: idVideo });

        if(traerVideo){
            try{
                const likes = traerVideo.likes;

                return res.status(200).json(likes);

            }catch(error){
                return res.status(500).json({
                    mensaje: 'Error en el servidor'
                });
            }
        }

        return res.status(400).json({
            mensaje: 'Error el video no existe'
        });
    },

    obtenerComentarios: async(req, res) => {
        const idVideo = req.params.id;

        const traerVideo = await video.findById({ _id: idVideo });

        if(traerVideo){
            try{
                const comentarios = traerVideo.comentarios;

                return res.status(200).json(comentarios);
                
            }catch(error){
                return res.status(500).json({
                    mensaje: 'Error en el servidor'
                });
            }
        }
    }
}

export default controller;