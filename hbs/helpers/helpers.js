const hbs = require('hbs')
const fs = require('fs')

//helpers, variables que se envían a los renders.
hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear()
})
hbs.registerHelper('capitalizar',(texto)=>{
    let palabras = texto.split(' ');
    palabras.forEach((palabra,idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase()+palabra.slice(1).toLowerCase()
    });
    return palabras.join(' ')
})

hbs.registerHelper('obtenerPokemons',()=>{
    var obj = JSON.parse(fs.readFileSync('public/assets/data/data.json', 'utf8'));
    var poke = ""
    for(var i =0; i < obj.results.length;i++){
        poke = poke +`<div class="card mr-4 mb-2"><img src=${obj.results[i].img} class="card-img-top"/><div class="card-footer">#${i+1} ${obj.results[i].name}</div></div>`;
    }

    return poke
    
})

