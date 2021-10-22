import "./scripts/elements/card/card.js";
import "./scripts/elements/loader/loader.js";
import "./scripts/elements/input/input.js";
import fetch from "./scripts/services/fetch.js";
import { POST_URL } from "./scripts/constants/global.constant.js";
class App {
    init(){

        const app = document.querySelector("#app");
        const inputE = document.createElement("app-inputheader");
        inputE.addEventListener("inputChanged",async function(event){
           
            app.innerHTML="";
            const response = await fetch.get(POST_URL,{
                queryparams : {
                    name:event.detail
                }
            });
            response.results.forEach(post=>{
                const appCard = document.createElement("app-card");
                appCard.innerHTML = `
                    <h1 slot="card-header" class="header"> ${post.name}</h1>
                    <span slot="card-description" class="header"> ${post.status}</span>
                `;
                app.appendChild(appCard);
                appCard.addEventListener("cardClicked", (event)=>{
                    alert(event.detail);
                });
            })
            document.body.appendChild(app);
        });
        document.body.appendChild(inputE);
    }
}

const app = new App();
app.init();