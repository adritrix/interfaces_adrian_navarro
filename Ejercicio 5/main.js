var lista= new Set(
    document.getElementById('letrero1'),
    document.getElementById('letrero2'),
    document.getElementById('letrero3'),
    document.getElementById('letrero4'),
    document.getElementById('letrero5')
);

function limpia(){
    // alert('Estoy dentro');
    // for (let item of lista){
    //     clearTimeout(item.cascada);
    //     item.style.display='none';
    // }
    clearInterval(document.getElementById('letrero1').cascada);
    document.getElementById('letrero1').style.display='none';
    clearInterval(document.getElementById('letrero2').cascada);
    document.getElementById('letrero2').style.display='none';
    clearInterval(document.getElementById('letrero3').cascada);
    document.getElementById('letrero3').style.display='none';
    clearInterval(document.getElementById('letrero4').cascada);
    document.getElementById('letrero4').style.display='none';
    clearInterval(document.getElementById('letrero5').cascada);
    document.getElementById('letrero5').style.display='none';
    cascadaAlpha();
}

function cascadaLetrero1(){
    return new Promise((resolve,reject)=>{
        document.getElementById('letrero1').cascada=setTimeout(() => {
            // console.log(document.getElementById('letrero1').style.display);
            document.getElementById('letrero1').style.display='block';
            // console.log(document.getElementById('letrero1').style.display);
            if ( document.getElementById('letrero1').style.display=='block'){
                return resolve('conseguido');
            }
            else{
                return reject('no conseguido');
            }

        }, 1000);
    });
}

function cascadaLetrero2(){
    return new Promise((resolve,reject)=>{
        document.getElementById('letrero2').cascada=setTimeout(() => {
            // console.log(document.getElementById('letrero1').style.display);
            document.getElementById('letrero2').style.display='block';
            // console.log(document.getElementById('letrero1').style.display);
            if ( document.getElementById('letrero2').style.display=='block'){
                return resolve('conseguido');
            }
            else{
                return reject('no conseguido');
            }

        }, 1000);
    });
}

function cascadaLetrero3(){
    return new Promise((resolve,reject)=>{
        document.getElementById('letrero3').cascada=setTimeout(() => {
            // console.log(document.getElementById('letrero1').style.display);
            document.getElementById('letrero3').style.display='block';
            // console.log(document.getElementById('letrero1').style.display);
            if ( document.getElementById('letrero3').style.display=='block'){
                return resolve('conseguido');
            }
            else{
                return reject('no conseguido');
            }

        }, 1000);
    });
}

function cascadaLetrero4(){
    return new Promise((resolve,reject)=>{
        document.getElementById('letrero4').cascada=setTimeout(() => {
            // console.log(document.getElementById('letrero1').style.display);
            document.getElementById('letrero4').style.display='block';
            // console.log(document.getElementById('letrero1').style.display);
            if ( document.getElementById('letrero4').style.display=='block'){
                return resolve('conseguido');
            }
            else{
                return reject('no conseguido');
            }

        }, 1000);
    });
}

function cascadaLetrero5(){
    return new Promise((resolve,reject)=>{
        document.getElementById('letrero5').cascada=setTimeout(() => {
            // console.log(document.getElementById('letrero1').style.display);
            document.getElementById('letrero5').style.display='block';
            // console.log(document.getElementById('letrero1').style.display);
            if ( document.getElementById('letrero5').style.display=='block'){
                return resolve('conseguido');
            }
            else{
                return reject('no conseguido');
            }

        }, 1000);
    });
}

function cascadaAlpha(){
    cascadaLetrero1().
    then(retorno=> cascadaLetrero2().
    then(retorno=> cascadaLetrero3().
    then(retorno=> cascadaLetrero4().
    then(retorno=>cascadaLetrero5())))
    );
}



function main(){
    document.getElementById('contenedorPrincipal').onclick=limpia;
    // cascadaLetrero1().then(retorno=> console.log(retorno), retorno=> console.log(retorno));
    // console.log(document.getElementById('letrero1').style.display);
    // cascadaLetrero2();
    cascadaAlpha();

}

window.onload=main;