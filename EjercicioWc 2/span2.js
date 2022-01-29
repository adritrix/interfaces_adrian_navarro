class Span2 extends HTMLSpanElement{
    // baseColor;
    // alternativeColor;
    // changeInterval;

    constructor() {
		super();
        // this.baseColor='inherit';
        // this.alternativeColor='transparent';
        // this.changeInterval=1;
        // this.setAttribute('innerHTML','Hola soy pepe');
        // this.innerHTML='hola soy pepe';
        // this.innerText='hola soy pepe';
        // this.style.color='red';
 	}

    connectedCallback(){
        // this.baseColor='inherit';
        // this.alternativeColor='transparent';
        // this.changeInterval=1;


        this.setAttribute('baseColor','inherit');
        this.setAttribute('alternativeColor','transparent');
        this.setAttribute('changeInterval','1');
        // this.setAttribute('innerText','Hola soy pepe');
        // this.innerHTML='hola soy pepe';
        // this.innerText='hola soy pepe';
        // this.style.color='red';
        // this.id='pepe';
     }
    attributeChangedCallback (attr, oldVal, newVal) {
        console.log("Propiedad modificada", attr, oldVal, newVal);
        }
    static get observedAttributes(){
        // return ['baseColor','alternativeColor','changeInterval','innerHTML'];
        return ['id','class','baseColor','alternativeColor','changeInterval','innerHTML'];
    }
        
        
       

    get baseColor(){
        return this.getAttribute('baseColor');
    }

    get alternativeColor(){
        return this.getAttribute('alternativeColor');
    }

    get changeInterval(){
        return this.getAttribute('changeInterval');
    }

    set baseColor(valor){
        this.setAttribute('baseColor',valor);
    }

    set alternativeColor(valor){
        this.setAttribute('alternativeColor',valor);
    }

    set changeInterval(valor){
        this.setAttribute('changeInterval',valor);
    }
    
    colores(){
        var ele=this;
        setInterval(function() { 
            if(ele.style.color==ele.alternativeColor)
                ele.style.color=ele.baseColor;
            else
            ele.style.color=ele.alternativeColor;},ele.changeInterval+'000');
    }
}

customElements.define('fancy-span', Span2, {extends: 'span'});
