const express = require('express');
const puerto = '3000';
const app = express();
const con = require('./sql/db.js');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/peliculas', function (req, res) {
    con.query('select * from pelicula', function (error, resultado, fields){
        if (error) {
            res.status(404).send('no se encontró peliculas')
        }

        respuesta = {
            'preguntas': resultado
        };
    
        res.send(JSON.stringify(respuesta.preguntas));
        console.log(respuesta);
    })
  })
 
app.listen(puerto, function () {
    console.log( "Escuchando en el puerto " + puerto );
  });

process.on('uncaughtException', function (err) {
    console.log(err)
})