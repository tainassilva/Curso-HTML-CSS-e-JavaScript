// Requisição
// Tem duas funções:
// Uma é para quando a requisição for normal
// e a outra é para quando der erro...

postsFetch.interceptors.request.use(
    //Configurações da requisição
    function(config){
        console.log("Antes da requisição...")
        return config;
    },
    function(error){
        return Promisse.reject(error);
    }
);
//Reposta
postsFetch.interceptors.response.use(
    //Configurações da requisição
    function(response){
        console.log("Antes da resposta...")
        return response;
    },
    function(error){
        return Promisse.reject(error);
    }
);


