const fs = require('fs');
var colors = require('colors');


const crearArchivo = async ( base = 5, listar = false, hasta = 5 ) => {

    

    try {

        let salida = '';  
        let consola = '';      

        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.magenta} ${i} ${'='.magenta} ${base * i}\n`;

            
        }
        if(listar){
            console.log("========================".magenta);
            console.log(`Tabla del ${base}`.rainbow);
            console.log("========================".magenta);
            console.log(colors.yellow(consola));
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
        
        return `tabla-${base}.txt`;

    } catch (error) {

        throw error;
        
    }
    
    

}

module.exports = {

    crearArchivo: crearArchivo

}