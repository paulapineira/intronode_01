const fs = require('fs');
const path = './citas.json';

// Función que registra una cita nueva
function registrar(nombre, edad, animal, color, enfermedad) {
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };

  // Lecturaa de las citas existentes
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error para leer el archivo:', err);
      return;
    }

    // Parseo del archivo JSON
    const citas = JSON.parse(data);

    // Agregar la nueva cita al arreglo vacio en el archivo citas.json
    citas.push(nuevaCita);

    // Guardar las citas actualizadas en el archivo
    fs.writeFile(path, JSON.stringify(citas, null, 2), (err) => {
      if (err) {
        console.error('Error para escribir las citas en el archivo:', err);
        return;
      }
      console.log('La cita se registra de manera exitosa :)');
    });
  });
}

// Función que lee todas las citas registradas en el archivo citas.json
function leer() {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error para leer el archivo:', err);
      return;
    }

    // Parseo del archivo JSON
    const citas = JSON.parse(data);
    console.log('Citas registradas:');
    citas.forEach((cita, index) => {
      console.log(`${index + 1}. Nombre: ${cita.nombre}, Edad: ${cita.edad}, Animal: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
    });
  });
}

// Exportacion de las funciones para que se puedan ocupar  en otros archivos
module.exports = {
  registrar,
  leer
};
