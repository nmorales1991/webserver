const hbs = require('hbs')


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