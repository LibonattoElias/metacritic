var datosJuegos = [];
var datosPelis = [];
var datosMusica = [];

cargarDatosMusica();
cargarDatosJuegos();
cargarDatosPelis();

setTimeout(function(){
    cargarDivsPelis();
}, 2000);

setTimeout(function () {
    cargarDivsJuegos();
}, 2000);

setTimeout(function () {
    cargarDivsMusica();
}, 2000);


//Ajax parse Json a objeto
function cargarDatosJuegos() {
    let req = new XMLHttpRequest();

    req.onload = () => {
        let json = JSON.parse(req.responseText);
        if (json != undefined) {
            //Guarda datos parseados del json
            for (i = 0; i < json.length; i++) {
                datosJuegos.push({
                    id: json[i].id,
                    name: json[i].name,
                    resena: json[i].resena,
                    img: json[i].img,
                    resumen: json[i].resumen,
                    puntuacion: json[i].puntuacion
                })
            }
        }
    }
    setTimeout(function () {
        console.log(datosJuegos);
    }, 3000)

    

    req.open("GET", "http://localhost:9999/json/datosJuegos.json");
    

    req.send();
}

function cargarDatosPelis() {
    let req = new XMLHttpRequest();

    req.onload = () => {
        let json = JSON.parse(req.responseText);
        if (json != undefined) {
            //Guarda datos parseados del json
            for (i = 0; i < json.length; i++) {
                datosPelis.push({
                    id: json[i].id,
                    name: json[i].name,
                    resena: json[i].resena,
                    img: json[i].img,
                    resumen: json[i].resumen,
                    puntuacion: json[i].puntuacion
                })
            }
        }
    }
    setTimeout(function () {
        console.log(datosPelis);
    }, 3000)



    req.open("GET", "http://localhost:9999/json/datosPelis.json");


    req.send();
}

function cargarDatosMusica() {
    let req = new XMLHttpRequest();

    req.onload = () => {
        let json = JSON.parse(req.responseText);
        if (json != undefined) {
            //Guarda datos parseados del json
            for (i = 0; i < json.length; i++) {
                datosMusica.push({
                    id: json[i].id,
                    name: json[i].name,
                    cancion: json[i].cancion,
                    img: json[i].img,
                    resumen: json[i].resumen,
                    puntuacion: json[i].puntuacion
                })
            }
        }
    }
    setTimeout(function () {
        console.log(datosMusica);
    }, 3000)



    req.open("GET", "http://localhost:9999/json/datosMusica.json");


    req.send();
}

//funcion que crea divs por cada elemento del json
function cargarDivsPelis() {


    var divDatos = document.getElementById("div-pelis"); //usa el div del html

    datosPelis.forEach(element => {  //por cada elemento del json
        let divPersonal = document.createElement("div"); //crea un div
        divPersonal.setAttribute("id", element.id); //le "da" a cada uno un id que se llama igual que el id del elemento
        divPersonal.innerText = element.name; //a cada div lo rellena con el elemento name
        divPersonal.setAttribute("onclick", "window.location.href =' /pagina' ");
        let a1 = document.createElement("a1");   //crea un a1 con la reseña
        a1.setAttribute("class", "resena");
        a1.innerText = element.resena;
        divPersonal.appendChild(a1);

        let img = document.createElement("img"); //crea un elemento img
        img.setAttribute("src", element.img); // le confiere el atributo src con la ruta de la imagen
        img.setAttribute("class", "fotos-pelis"); // le da una clase
        divPersonal.appendChild(img); // agrega el elemento img al div
        divDatos.appendChild(divPersonal); // agrega el div al div contenedor
    });

}


function cargarDivsJuegos() {


    var divDatos = document.getElementById("div-juegos"); //usa el div del html

    datosJuegos.forEach(element => {  //por cada elemento del json
        let divPersonal = document.createElement("div"); //crea un div
        divPersonal.setAttribute("id", element.id); //le "da" a cada uno un id que se llama igual que el id del elemento
        divPersonal.innerText = element.name; //a cada div lo rellena con el elemento name
        divPersonal.setAttribute("onclick", "window.location.href =' /pagina' ");
        let a1 = document.createElement("a1");   //crea un a1 con la reseña
        a1.setAttribute("class", "resena");
        a1.innerText = element.resena;
        divPersonal.appendChild(a1);

        let img = document.createElement("img"); //crea un elemento img
        img.setAttribute("src", element.img); // le confiere el atributo src con la ruta de la imagen
        img.setAttribute("class", "fotos-juegos"); // le da una clase
        divPersonal.appendChild(img); // agrega el elemento img al div
        divDatos.appendChild(divPersonal); // agrega el div al div contenedor
    });

}

function cargarDivsMusica() {


    var divDatos = document.getElementById("div-musica"); //usa el div del html

    datosMusica.forEach(element => {  //por cada elemento del json
        let divPersonal = document.createElement("div"); //crea un div
        divPersonal.setAttribute("id", element.id); //le "da" a cada uno un id que se llama igual que el id del elemento
        divPersonal.innerText = element.name; //a cada div lo rellena con el elemento name
        divPersonal.setAttribute("onclick", "window.location.href =' /pagina' "); 
        let a1 = document.createElement("a1");   //crea un a1 con la reseña
        a1.setAttribute("class", "resena");
        a1.innerText = element.resena;
        divPersonal.appendChild(a1);

        let img = document.createElement("img"); //crea un elemento img
        img.setAttribute("src", element.img); // le confiere el atributo src con la ruta de la imagen
        img.setAttribute("class", "fotos-musica"); // le da una clase
        divPersonal.appendChild(img); // agrega el elemento img al div
        divDatos.appendChild(divPersonal); // agrega el div al div contenedor
    });

}