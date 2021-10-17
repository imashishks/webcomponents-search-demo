class Fetch{
    async get(url,params){
        const loader = document.createElement("app-loader");
        document.body.appendChild(loader);
        const {queryparams} = params;
        let queryString = "";
        for(let query in queryparams){
            queryString+= `&${query}=${queryparams[query]}`;
        }
        const response = await 
            fetch(`${url}?${queryString}`,params)
                .then(res=> {
                    document.body.removeChild(loader);
                    return res.json();
                });
        return response;
    }
    post(){

    }

}

export default new Fetch();