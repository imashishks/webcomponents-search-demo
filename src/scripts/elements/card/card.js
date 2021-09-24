import style from './card.css' assert {type: 'css'};
class Card extends HTMLElement {
  header = "";
  constructor() {
    super();
    // create shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [style];
  }
  
  connectedCallback(){
    this.header = this.getAttribute("header");
    this.description = this.getAttribute("description");
    this.shadowRoot.innerHTML = this.render();
  }
  render() {
    return `
      <div class="card">
        <div class="header">
          <h1> ${this.header}</h1>
        </div>
        <div>
          <p>${this.description}</p>
        </div>
      </div>
      
    `;
  }
}
customElements.define("app-card", Card);
