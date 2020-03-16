const express = require('express');
const app = express();
const hbs = require('hbs');


const port = process.env.PORT || 3000;

require('./hbs/helpers');


let persona = {
    nombre: 'Andi',
    apellido: 'Infante',
    anio: new Date().getFullYear()
}

//middleware (DE DOMINIO PUBLICO!)
app.use(express.static(__dirname + '/public'));


//EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
    res.render('home', persona);
});

app.get('/about', (req, res) => {
    res.render('about', persona);
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});