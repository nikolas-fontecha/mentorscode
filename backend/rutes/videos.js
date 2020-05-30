import express           from 'express';
import controllerVideo from '../controllers/video';

var router = express.Router();

router.post('/agregar-video', controllerVideo.agregarVideo);
router.post('/agregar-comentario/:id', controllerVideo.agregarComentario);

module.exports = router;