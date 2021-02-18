class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.nike=this.getAttribute('nike')
        this.img = this.getAttribute('img')
        this.title = this.getAttribute("title")
        this.subtitle = this.getAttribute("subtitle")
        this.textos = this.getAttribute("textos")
        this.price = this.getAttribute("price")
        this.buton = this.getAttribute("buton")
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
        <div class="imagen">      
          <h1 class="nike">${this.nike}</h3>  
         <img src="${this.img}">
         </div>
     
            <div class="textos">
                <h1>${this.title}</h1>
                <h3>${this.subtitle}</h3>
                <p>${this.textos}<p>
            
                <div class="button">
                    <h1>${this.price}</h1>
                    <button>${this.buton}</button>
                </div>
            
            </div>
            
            
            
            
        </section>
        
            ${this.getStyles()}
        `
        return template;
    }
    getStyles() {
        return `
            <style>
            :host{
                --primary-color: #5a6cb2;
                
                --font-size: 1.7rem;
                --section-width: 60rem;
                --section-height:36rem;
                --font-size-nike: 6rem;
                --bottom-nike: 2rem;
                --font-textos-h1:2.7rem;
                --padding-left-h1: 2rem;
                --font-textos-h3:1.3rem;
                --font-textos-p:0-5rem;
                --padding-left-p: 5rem;
                --imagen-width:100%;
                --imagen-height:100%;
                --img-width: 150%;
                --img-height:90%;
                --img-right:12rem;
                --img-bottom: 9rem;
                --button-width:6rem;
                --button-height: 3rem;
                --padding:10rem;
                --transform: rotate(-30deg);
                --display:grid;
                --flex-direction: none;
            }
            section{
                display:var(--display);
                grid-template-columns:repeat(2,50% 50%);
                grid-template-rows: 100%;
              
                flex-direction: var(--flex-direction);
                width:var(--section-width);
                height: var(--section-height);
                padding:var(--padding);
                margin-bottom: 18rem;
                padding-left: 1.3rem;
            
        
                
            }
            .nike{
                color:rgba(0, 0, 0, 0.226);
                padding-left: 2rem;
                font-size:var(--font-size-nike);
                position:relative;
                bottom: var(--bottom-nike);
            }
           .textos{
               
               background: white;
                padding: 1.3rem;
               grid-column: 2;
               grid-row: 1;
           
        
               
            
           } 
           .textos h1{
               padding-left: var(--padding-left-h1);
               font-size: var(--font-textos-h1);
            
              
           }
           .textos h3{
            font-size: var(--font-textos-h3);
            padding-left: var(--padding-left-h1);
            border: 4rem;
            color:gray;
           
           }
           .textos p {
            padding-left: var(--padding-left-p);
           
            font-size: var(--font-textos-p);
            
            
            }
           
            
        
            .imagen{
                width:var(--imagen-width);
                height:var(--imagen-height);
               background: var(--primary-color);
               
            }
            img{
                width:var(--img-width);
                height:var(--img-height);                   
                transform: var(--transform);
                position: relative;
                right:var(--img-right);
                bottom: var(--img-bottom);
               
            }
            .button{
                
                display:flex;
                justify-content:space-around;
                align-items:center;
       
                
            }
            .button h1{
                color:gray;
                display:flex;
                justify-content:flex-start;
                width:60%;
                
            }
            .button button{
                width:var(--button-width);
                height: var(--button-height);
                background: var(--primary-color);
                border-radius:0.7rem;
            
            }

            </style>
        
        
        `
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render();
    }
}


customElements.define("my-element", myElement)