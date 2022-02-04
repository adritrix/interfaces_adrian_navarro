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
// _______________________________________________________Ejerecicio 3 funcionando 

function dropGris(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(data).style.backgroundColor="red";
    document.getElementById(data).innerHTML="";
  }

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var offset = ev.dataTransfer.getData("text").split(',');
    console.log(data);
    console.log(offset)
    
    // ev.target.appendChild(document.getElementById('cajaVerde'));
    // console.log(ev);
    // console.log('Coordenada x: '+coordX+ 'Coordenada y: '+coordY);
    // console.log(coordenadas);
    var cajaVerde=document.getElementById('cajaVerde');
    
    // cajaVerde.style.left = (ev.clientX + parseInt(offset[0])) + 'px';
    // cajaVerde.style.top = (ev.clientY + parseInt(offset[1])) + 'px';
    cajaVerde.style.left = ev.clientX +  'px';
    cajaVerde.style.top = ev.clientY +  'px';
    // cajaVerde.style.top=coordY+'px';
    // cajaVerde.style.left=coordX+'px';
  }

function allowDrop(ev) {
    ev.preventDefault();
  }

function drag(ev) {
    // ev.dataTransfer.setData("text", ev.target.id);
    var coordenadas = ev.target.getBoundingClientRect();
    ev.dataTransfer.setData("text",(parseInt(coordenadas.left - ev.clientX) + ',' + parseInt(coordenadas.top - ev.clientY)+ ',' +ev.target.id));
    
  }
//   ________________________________________________________________________
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

    // ______________________________________________Ejercicio 3 funcionando

    // var body=document.getElementsByTagName('body');
    // var pepe=document.getElementById('pepe');
    // pepe.style.width='20rem';
    // pepe.style.height='20rem';
    // pepe.style.backgroundColor='grey';
    // pepe.ondrop=dropGris;
    // pepe.ondragover=allowDrop;
    // pepe.style.position='relative';
    // pepe.style.top='10rem';
    // pepe.style.left='50rem';

    cajaVerde.draggable=true;
    cajaVerde.ondragstart=drag;

    var contenedorPrincipal=document.getElementById('contenedorPrincipal');
    contenedorPrincipal.ondrop=drop;
    contenedorPrincipal.ondragover=allowDrop;
    contenedorPrincipal.style.width='100%';
    contenedorPrincipal.style.height='800rem';

    // ______________________________________________________________
}

window.onload=main;