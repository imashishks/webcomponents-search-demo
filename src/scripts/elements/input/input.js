import style from './input.css' assert { type: 'css' };
import { debounce } from '../../services/utils.js';
class InputHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.adoptedStyleSheets = [style];
        this.render();

    }
    connectedCallback() {
        const input = this.shadowRoot.querySelector("#input");
       
        const debouncedInputChange = debounce((e)=>{
            this.dispatchEvent(new CustomEvent("inputChanged", {
                detail: input.value
            }));
        }, 300);
        input.addEventListener ("input", debouncedInputChange);
    }

    render() {
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