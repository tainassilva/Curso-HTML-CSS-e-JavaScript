// Uma variável para receber os dados 
// Como se fosse um novo axios para responder as 
// novas configurações...
const postsFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Accept: "application/json",
        Authorization: "meuNovoToken"
    }
});



