const { registrar, leer } = require('./operaciones');

// Obtenemos los argumentos escritos por línea de comandos
const [, , operacion, ...args] = process.argv;

if (operacion === 'registrar') {
  // La función registrar espera 5 argumentos: nombre, edad, tipo, color y enfermedad
  registrar(...args);
} else if (operacion === 'leer') {
  leer();
} else {
  console.log('Operación inválida');
}


