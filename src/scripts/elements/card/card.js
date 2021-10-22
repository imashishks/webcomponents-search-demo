// import style from './card.css' assert {type: 'css'};

const template = document.createElement("template");
template.innerHTML= `
  <style>
    .card{
      background-color: #fff;
      box-shadow: 0 5px 10px 0 lightgray;
      padding: 20px;
      margin: 10px;
      border-radius: 10px;
      cursor: pointer;
    }
    .header{
      color: #999;
    }
  
  </style>
  <div class="card">
    <div class="header">
      <slot name="card-header"></slot>
    </div>
    <div>
      <slot name="card-description"></slot>
    </div>
  </div>

`;
class Card extends HTMLElement {
  data = "";
  constructor() {
    super();
    // create shadow root
    this.attachShadow({ mode: "open" });

    this.render();
  }
  
  connectedCallback(){
    this.data = this.getAttribute("data");
    this.description = this.getAttribute("description");
    
    
  }
  cardClicked(){
    this.dispatchEvent(new CustomEvent("cardClicked", {
      detail: "Card clicked "
    }));
  }
  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector(".card")
      .addEventListener("click",this.cardClicked.bind(this));
  }
}
customElements.define("app-card", Card);
