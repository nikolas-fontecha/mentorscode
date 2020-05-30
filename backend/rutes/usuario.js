import express            from 'express';
import controllersUsuario from '../controllers/usuario';

var router = express.Router();

router.post('/registrar', controllersUsuario.registarUsuario);
router.post('/agregar-favorito/:id', controllersUsuario.agregarFavorito);

module.exports = router;