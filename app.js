class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.img = this.getAttribute('img')
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section class="card">
        <div class="imagen">      
          <h1 class="nike"> <slot name="NIKE"></slot></h3>  
         <img src="${this.img}">
         </div>
     
            <div class="textos">
                <h1><slot name="title"></slot></h1>
                <h3><slot name="subtitle"></slot></h3>
                <p><slot name="texto"></slot><p>
            
                <div class="button">
                    <h1><slot name="price"></slot></h1>
                    <button><slot name="buton"></slot></button>
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
                    --font-textos-p:1rem;
                    --padding-left-p: 5rem;
                    --imagen-width:100%;
                    --imagen-height:100%;
                    --img-width: 150%;
                    --img-height:90%;
                    --img-right:12rem;
                    --img-bottom: 9rem;
                    --button-width:6rem;
                    --button-height: 3rem;
                }
                section{
                  
                    display:grid;
                    grid-template-columns:repeat(2,50% 50%);
                    grid-template-rows: 100%;
                   
                    width:var(--section-width);
                    height: var(--section-height);
                    padding:10rem;
                  
                    
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
                    transform: rotate(-30deg);
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