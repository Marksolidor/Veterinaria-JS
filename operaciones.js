const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad) {
  // Leemos el archivo citas.json
  fs.readFile('citas.json', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Convertimos la data a formato JSON
    const citas = JSON.parse(data);

    // Agregamos la nueva cita al arreglo
    citas.push({
      nombre,
      edad,
      tipo,
      color,
      enfermedad
    });

    // Guardamos el arreglo en el archivo citas.json
    fs.writeFile('citas.json', JSON.stringify(citas), err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Cita registrada con éxito');
      }
    });
  });
}

function leer() {
  // Leemos el archivo citas.json
  fs.readFile('citas.json', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Convertimos la data a formato JSON y la mostramos en la consola
    console.log(JSON.parse(data));
  });
}

module.exports = {
  registrar,
  leer
};
