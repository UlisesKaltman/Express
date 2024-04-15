import express from "express"
import cors from"cors"
import alumno from "./src/models/alumno.js"
import{sumar,restar,multiplicar,dividir} from "./src/modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./src/modules/omdb-wrapper.js"

const app  = express();
const port = 3000;
const alumnosArray=[]; 
alumnosArray.push(new alumno("EstebanDido" ,"22888444",20)); 
alumnosArray.push(new alumno("MatiasQueroso","28946255",51)); 
alumnosArray.push(new alumno("ElbaCalao" ,"32623391",18));
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


    app.get('/matematica/sumar', function (req, res){ 
    let num1=parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);
    let result= sumar(num1,num2);
    res.send(result.toString());
    });

    app.get('/matematica/restar', function (req, res){ 
        let num1=parseInt(req.query.num1);
        let num2=parseInt(req.query.num2);
        let result= restar(num1,num2);
        res.send(result.toString());
    });

    app.get('/matematica/multiplicar', function (req, res){ 
        let num1=parseInt(req.query.num1);
        let num2=parseInt(req.query.num2);
        let result= multiplicar(num1,num2);
        res.send(result.toString());
    });

    app.get('/matematica/dividir', function (req, res){ 
        let num1=parseInt(req.query.num1);
        let num2=parseInt(req.query.num2);
        let result= dividir(num1,num2);
        res.send(result.toString());
    });

    app.get('/omdb/searchbypage', async function (req, res){ 
        let page = req.query.page;
        let searchText= req.query.texto;
        let result=await OMDBSearchByPage(searchText,page);
        res.status(200).send(result);
    });

    app.get('/omdb/GetByImdbID', async function (req, res){ 
        let imdbID = req.query.id;
        let result=await OMDBSearchByPage(imdbID);
        res.status(200).send(result);
    });

    app.get('/alumno', async function (req, res){ 
        res.status(200).send(alumnosArray);
    });

    app.get('/alumno/:dni',  function (req, res){
        const dniParam = req.params.dni;
        let alumno =  alumnosArray.find(alumno => alumno.DNI === dniParam);
        res.status(200).send(alumno);
    });


    app.post('/agregar-alumno',  function (req, res){
        let nuevoAlumno = req.body;
        alumnosArray.push(new alumno(nuevoAlumno));
        res.json(201).send('creado');
    });

    app.delete('/eliminar-alumno',  function (req, res){
        let nuevoAlumno = req.body;
        const index = alumnosArray.findIndex(alumno => alumno.DNI === nuevoAlumno.DNI);

        if (index !== -1) {
            alumnosArray.splice(index, 1); 
            res.status(201).send('Alumno eliminado');
        } else { 
            res.status(404).send('Alumno no encontrado');
        }
    });






app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})


