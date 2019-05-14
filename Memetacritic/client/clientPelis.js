
setTimeout(function () {
    cargarDivsPagPelis();
}, 2000);

setTimeout(function () {
    cargarDivsPagJuegos();
}, 2000);

function cargarDivsPagPelis() {

    var divDatosPelis = document.getElementById("div-pagpelis"); //usa el div del html

    datosPelis.forEach(element => {  //por cada elemento del json
        let divPersonal = document.createElement("div"); //crea un div
        divPersonal.setAttribute("id", element.id); //le "da" a cada uno un id que se llama igual que el id del elemento
        divPersonal.innerText = element.name; //a cada div lo rellena con el elemento name

        let a1 = document.createElement("a1");   //crea un a1 con la reseña
        a1.setAttribute("class", "resena");
        a1.innerText = element.resena;
        divPersonal.appendChild(a1);



        let img = document.createElement("img"); //crea un elemento img
        img.setAttribute("src", element.img); // le confiere el atributo src con la ruta de la imagen
        img.setAttribute("class", "fotos-pelis"); // le da una clase
        divPersonal.appendChild(img); // agrega el elemento img al div
        divPersonal.setAttribute("onclick", "window.location.href =' /pagina' ");
        divDatosPelis.appendChild(divPersonal); // agrega el div al div contenedor

    });

}

function cargarDivsPagJuegos() {


    var divDatosJuegos = document.getElementById("div-pagjuegos"); //usa el div del html

    datosJuegos.forEach(element => {  //por cada elemento del json
        let divPersonal = document.createElement("div"); //crea un div
        divPersonal.setAttribute("id", element.id); //le "da" a cada uno un id que se llama igual que el id del elemento
        divPersonal.innerText = element.name; //a cada div lo rellena con el elemento name

        let a1 = document.createElement("a1");   //crea un a1 con la reseña
        a1.setAttribute("class", "resena");
        a1.innerText = element.resena;
        divPersonal.appendChild(a1);

        let a2 = document.createElement("a2");   //crea un a2 con el resumen 
        a2.setAttribute("class", "resumen");
        a2.innerText = element.resumen;
        divPersonal.appendChild(a2);

        let img = document.createElement("img"); //crea un elemento img
        img.setAttribute("src", element.img); // le confiere el atributo src con la ruta de la imagen
        img.setAttribute("class", "fotos-pelis"); // le da una clase
        divPersonal.appendChild(img); // agrega el elemento img al div
        divDatosJuegos.appendChild(divPersonal); // agrega el div al div contenedor
    });

}