import style from './loader.css' assert {type: 'css'};
const template = document.createElement("template");
template.innerHTML = `
  <div class="loader">
    <h2>Loading...</h2>
  </div>
`;
class Loader extends HTMLElement {
 
  constructor() {
    super();
    // create shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [style];
  }
  
  connectedCallback(){
    // this.header = this.getAttribute("header");
    // this.description = this.getAttribute("description");
    this.render();
  }
  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("app-loader", Loader);
