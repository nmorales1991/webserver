const http = require('http')

const json = require('./package.json')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    
    res.write(JSON.stringify(json))
    res.end()
}).listen(3000)

console.log("escuchando el puerto 3000")