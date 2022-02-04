var cuenta;
function intervalo(){
    var contador=document.getElementById('contador');

    if(contador.innerHTML!=0){
        contador.innerHTML=contador.innerHTML-1
    }
}
function bInicioAccion() {
    var contador=document.getElementById('contador');
    contador.innerHTML=document.getElementById('entrada').value;
    cuenta=setInterval(intervalo,1000);

}

function bPararAccion(){
    clearInterval(cuenta,1000);
}

function main(){
    // alert('main');
    var bInicio=document.getElementById('inicio');
    bInicio.onclick=bInicioAccion;

    var bParar=document.getElementById('parar');
    bParar.onclick=bPararAccion;
}

window.onload=main;