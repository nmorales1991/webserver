const express = require('express')
const app = express()
const hbs = require('hbs')

require('./hbs/helpers/helpers') // no se deja en constante porque el código se ejecuta solamente, cuando se importa

//usa la carpeta public como sitio web
app.use(express.static(__dirname+'/public'))

//hbs
//carpeta de parciales (componentes reutilizables)
hbs.registerPartials(__dirname + '/views/parciales')
//engine que renderiza archivos hbs
app.set('view engine','hbs')




//renders
app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'hUmano'
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(3000,()=>{
    console.log("Escuchando peticiones en el puerto 3000")
})