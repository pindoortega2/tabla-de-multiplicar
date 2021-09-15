const argv = require('yargs')
        .option('b' , {
            alias: 'base',
            type: 'number',
            demandOption: true,
            description: 'Es la base de la tabla de multiplicar'

        })
        .option('l' , {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            description: 'Muestra la tabla en consola'

        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            description: 'Numero hasta donde se va a multiplicar'
        })
        .check((argv, options) =>{
            if( isNaN(argv.b)){
                throw 'La base tiene que ser un número'
            }
            return true;
        })
        .argv;

module.exports = argv;     