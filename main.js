var lienzo = new fabric.Canvas("lienzo");

jugadorx = 10;

jugadory = 10;

bloqueancho = 30;

bloquealto = 30;

var jugador = "";

var bloque = "";

function Cargarjugador() {
    fabric.Image.fromURL("steve.png", function(Img){
        jugador = Img;
        jugador.scaleToWidth(150);
        jugador.scaleToHeigth(140);
        jugador.set({
            top:jugadory,
            left:jugadorx
        });
        lienzo.add(jugador);
    });
}

function nuevobloque(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        bloque = Img;
        bloque.scaleToWidth(bloqueancho);
        bloque.scaleToHeigth(bloquealto);
        bloque.set({
            top:jugadory,
            left:jugadorx
        });
        lienzo.add(bloque);
    });
}

window.addEventListener("keydown", botones);

function botones(e) {
    boton = e.keyCode;
    if (boton=='38'){
        arriba();
    }
    if (boton=='40'){
        abajo();
    }
    if (boton=='37'){
        izquierda();
    }
    if (boton=='39'){
        derecha();
    }
    if (boton=='87'){
        nuevobloque('ladrillo.jpg')
    }
    if (boton=='71'){
        nuevobloque('tierra.png')
    }
    if (boton=='76'){
        nuevobloque('pastoclaro.png')
    }
    if (boton=='84'){
        nuevobloque('tronco.jpg')
    }
    if (boton=='82'){
        nuevobloque('ladrillonether.jpg')
    }
    if (boton=='87'){
        nuevobloque('ladrilli.jpg')
    }
    if (boton=='89'){
        nuevobloque('bloqueamarillo.png')
    }
    if (boton=='68'){
        nuevobloque('pastooscuro.png')
    }
    if (boton=='85'){
        nuevobloque('polvoluminoso.png')
    }
    if (boton=='67'){
        nuevobloque('concreto.jpg')
    }
    if (boton=='90'){
        nuevobloque('blanco.png')
    }
    if (boton=='80' && e.shiftKey==true){
        bloqueancho= bloqueancho + 10;
        bloquealto = bloquealto + 10;
        document.getElementById("anchobloque").innerHTML = bloqueancho;
        document.getElementById("altobloque").innerHTML = bloquealto;
    }
    if (boton=='77' && e.shiftKey==true){
        bloqueancho= bloqueancho - 10;
        bloquealto = bloquealto - 10;
        document.getElementById("anchobloque").innerHTML = bloqueancho;
        document.getElementById("altobloque").innerHTML = bloquealto;
    }
}
function arriba() {
    if(jugadory>=0) {
        jugadory = jugadory-bloquealto;
        lienzo.remove(jugador);
        Cargarjugador();
    }
}
function abajo() {
    if(jugadory<=400) {
        jugadory = jugadory+bloquealto;
        lienzo.remove(jugador);
        Cargarjugador();
    }
}
function izquierda() {
    if(jugadorx>=0) {
        jugadorx = jugadorx-bloqueancho;
        lienzo.remove(jugador);
        Cargarjugador();
    }
}

function derecha() {
    if(jugadorx<=850) {
        jugadorx = jugadorx+bloqueancho;
        lienzo.remove(jugador);
        Cargarjugador();
    }
}