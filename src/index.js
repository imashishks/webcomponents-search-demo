import "./scripts/elements/card/card.js";
import "./scripts/elements/loader/loader.js";
import "./scripts/elements/input/input.js";
import fetch from "./scripts/services/fetch.js";
import { POST_URL } from "./scripts/constants/global.constant.js";
class App {
    init(){

        const app = document.querySelector("#app");
        const inputE = document.createElement("app-inputheader");
        inputE.addEventListener("inputE",async function(event){
            console.log(event);
            app.innerHTML="";
            const response = await fetch.get(POST_URL,{
                queryparams : {
                    name:event.detail
                }
            });
            response.results.forEach(post=>{
                const appCard = document.createElement("app-card");
                appCard.setAttribute("header",post.name );
                appCard.setAttribute("description",post.status );
                app.appendChild(appCard);
            })
            document.body.appendChild(app);
        });
        document.body.appendChild(inputE);
      
    }
    //Input 

}

const app = new App();
app.init();