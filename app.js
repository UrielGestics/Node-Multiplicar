const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
var colors = require("colors");

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    default:
        console.log(colors.red('comando no reconocido'));
        break;
}