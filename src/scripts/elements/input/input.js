import style from './input.css' assert {type: 'css'};
class InputHeader extends HTMLElement{
    constructor(){
        super();
      
        this.attachShadow({mode:"open"});
        this.shadowRoot.adoptedStyleSheets = [style];
        this.render();
    }
    connectedCallback(){
        const input = this.shadowRoot.querySelector("#input");
        input.oninput = (event) =>{
           this.dispatchEvent(new CustomEvent("inputE",{
               detail:event.target.value
           }));
        };
        
    }
    render(){
        const template = document.createElement("template");
        template.innerHTML = `
            <div class="input-header">
                <input type="text" id="input" />
            </div
        `
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}
customElements.define("app-inputheader", InputHeader);