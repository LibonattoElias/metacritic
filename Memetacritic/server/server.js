const express = require ('express');
const app = express();
const path = require ('path');
const exphbs = require ('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

//Config Handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'meta.handlebars',
    layoutDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//Ruta para recursos estaticos
app.use(express.static(path.join(__dirname, '../client')))
app.use(express.urlencoded({extended: true}));



//Get de home
app.get('/', (_req, res) => {

    fs.readFile('./datosPelis.json', (err, data) => {
        if (err) {
            console.log("err")
        }
        else {
            res.render('home', {
                titulo: "Metacritic",
                datosPelis: data
            });

        }
    });
});
    


//get pelis
app.get('/pelis', (_req, res) => {
    res.render('pelis',{
        title: 'Peliculas - Metacritic'
    })
});

//get juegos
app.get('/juegos', (_req, res) => {
    res.render('juegos',{
        title: 'Juegos - Metacritic'
    })
});

//get juegos
app.get('/musica', (req, res) => {
    res.render('musica', {
        title: 'Musica - Metacritic'
    })
});

app.get('/pagina', (_req, res) => {

    fs.readFile('./datosPelis.json', (err, data) => {
        if (err) {
            console.log("err")
        }
        else {
            res.render('pagina', {
                titulo: "Metacritic",
                datosPelis: data
            });

        }
    });
});

//get login

app.get('/login', (req, res) => {
    res.render('login',{
        title: 'Login - Metacritic'
    })
});

//get sign

app.get('/sign', (req, res) => {
    res.render('sign',{
        title: 'Registrarse - Metacritic'
    })
});

//Listener de puerto
app.listen(9999, () => {
    console.log("Escuchando en puerto 9999");
})