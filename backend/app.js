import express  from 'express';
import morgan   from 'morgan';
import mongoose from 'mongoose';
import cors     from 'cors';

//rutas
import rutasUsuarios from './rutes/usuario';

const app = express();

//Inicio conexión  a la base de datos
const uri     = 'mongodb://localhost:27017/mentorscode';
const options = {
    useNewUrlParser:    true,
    useCreateIndex:     true,
    useUnifiedTopology: true
};

mongoose.connect(uri, options)
.then(() => {
    console.log('Entramos a la base de datos'),
    err => {
        console.log(err);
    }
});

//Fin conexión a la base de datos

//Middleware

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/mentorscode/user', rutasUsuarios);

//Iniciar servidor
app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), () => {
    console.log('Servidor corriendo, puerto : '+app.get('puerto'));
});