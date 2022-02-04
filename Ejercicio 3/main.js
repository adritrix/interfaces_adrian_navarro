var cajaVerde;
var distancia;
function bDerechaAccion(){
    distancia=parseInt(document.getElementById('distancia').value,10);
    // cajaVerde.style.right=cajaVerde.style.right+distancia
    // cajaVerde.style.right='50px';
    console.log('Distancia '+distancia)
    var actual=cajaVerde.style.left;
    console.log('Actual: '+actual)
    var actualV2=parseInt(actual,10);
    var modificacion=actualV2+distancia;
    console.log('Modificacion: '+modificacion)
    cajaVerde.style.left=modificacion+'px';
    
}

function bIzquierdaAccion(){
    distancia=parseInt(document.getElementById('distancia').value,10);
    // cajaVerde.style.right=cajaVerde.style.right+distancia
    // cajaVerde.style.right='50px';
    console.log('Distancia '+distancia)
    var actual=cajaVerde.style.left;
    console.log('Actual: '+actual)
    var actualV2=parseInt(actual,10);
    var modificacion=actualV2-distancia;
    console.log('Modificacion: '+modificacion)
    cajaVerde.style.left=modificacion+'px';
    
}

function bArribaAccion(){
    distancia=parseInt(document.getElementById('distancia').value,10);
    // cajaVerde.style.right=cajaVerde.style.right+distancia
    // cajaVerde.style.right='50px';
    console.log('Distancia '+distancia)
    var actual=cajaVerde.style.top;
    console.log('Actual: '+actual)
    var actualV2=parseInt(actual,10);
    var modificacion=actualV2-distancia;
    console.log('Modificacion: '+modificacion)
    cajaVerde.style.top=modificacion+'px';
}

function bAbajoAccion(){
    distancia=parseInt(document.getElementById('distancia').value,10);
    // cajaVerde.style.right=cajaVerde.style.right+distancia
    // cajaVerde.style.right='50px';
    console.log('Distancia '+distancia)
    var actual=cajaVerde.style.top;
    console.log('Actual: '+actual)
    var actualV2=parseInt(actual,10);
    var modificacion=actualV2+distancia;
    console.log('Modificacion: '+modificacion)
    cajaVerde.style.top=modificacion+'px';
}
function main() {
    cajaVerde=document.getElementById('cajaVerde');
    cajaVerde.style.position='relative';
    cajaVerde.style.backgroundColor='green';
    cajaVerde.style.width='10rem';
    cajaVerde.style.height='10rem';
    cajaVerde.style.top='0px';
    cajaVerde.style.bottom='0px';
    cajaVerde.style.left='0px';
    cajaVerde.style.right='0px';

    var bDerecha=document.getElementById('derecha')
    bDerecha.onclick=bDerechaAccion;

    var bIzquierda=document.getElementById('izquierda')
    bIzquierda.onclick=bIzquierdaAccion;

    var bArriba=document.getElementById('arriba')
    bArriba.onclick=bArribaAccion;

    var bAbajo=document.getElementById('abajo')
    bAbajo.onclick=bAbajoAccion;
}

window.onload=main;