const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad) {
  // Read file citas.json
  fs.readFile('citas.json', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    //Convert the data to JSON format
    const citas = JSON.parse(data);

    // Add the new appointment to the array
    citas.push({
      nombre,
      edad,
      tipo,
      color,
      enfermedad
    });

    // Save the arrangement in the file appointments.json
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
  // Read file citas.json
  fs.readFile('citas.json', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Convert the data to JSON format and display it in the console
    console.log(JSON.parse(data));
  });
}

module.exports = {
  registrar,
  leer
};
