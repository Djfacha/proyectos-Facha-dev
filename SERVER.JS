var http = require('http');

const miservidor=http.createServer((req,res) =>{  
    console.log(req)
}
)


miservidor.listen.port(8080)




