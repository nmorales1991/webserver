const express = require('express')
const app = express()
const hbs = require('hbs')
const os = require('os')
const dns = require('dns');

require('./hbs/helpers/helpers') // no se deja en constante porque el código se ejecuta solamente, cuando se importa

//usa la carpeta public como sitio web
app.use(express.static(__dirname+'/public'))

//hbs
//carpeta de parciales (componentes reutilizables)
hbs.registerPartials(__dirname + '/views/parciales')
//engine que renderiza archivos hbs
app.set('view engine','hbs')
dns.lookup('iana.org', (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
  });
//renders
app.get('/',(req,res)=>{
    const cpu = os.cpus()
  
    res.render('home',{
        nombre:os.hostname(),//estas variables se pueden usar en el .hbs con {{}}, si se manda a llamar alguna que no esté acá, entonces se buscará en los helpers, como en el caso del getAnio del footer
        tipo: os.type(),
        plataforma: os.platform(),
        cpu: cpu[0].model
    
    })
})

app.listen(3000,()=>{
    console.log("Escuchando peticiones en el puerto 3000")
})