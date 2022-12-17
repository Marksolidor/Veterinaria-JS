const { registrar, leer } = require('./operaciones');

// We get the arguments written by command line
const [, , operacion, ...args] = process.argv;

if (operacion === 'registrar') {
  // The register function expects 5 arguments: nombre, edad, tipo, color y enfermedad
  registrar(...args);
} else if (operacion === 'leer') {
  leer();
} else {
  console.log('Operación inválida');
}


