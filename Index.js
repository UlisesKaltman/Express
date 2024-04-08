import express from "express"
import cors from"cors"
import alumno from "./src/models/alumno.js"
import{sumar,restar,multiplicar,dividir} from "./src/modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./src/modules/omdb-wrapper.js"

const app  = express();
const port = 3000;
app.use(cors());
app.use(express.json());

    app.get('/saludar/:nombre', function (req, res){  
        let id = req.params.nombre;
        res.send('Hola ' + id); 
    });
    app.get('/validarFecha/:ano/:mes/:dia', function (req, res){  
        let ano = req.params.ano;
        let mes = req.params.mes;
        let dia = req.params.dia;
        let fecha = `${ano}/${mes}/${dia}`;
        let segundosDeFecha = Date.parse(fecha);

        if (!isNaN(segundosDeFecha)) {
            res.status(200).send("la fecha es valida"); } 
        else {
            res.status(400).send("la fecha es invalida");
        }
        
    });




app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})


