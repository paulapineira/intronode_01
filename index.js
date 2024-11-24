// Importacion de las funciones creadas en el archivo operaciones.js
const { registrar, leer } = require('./operaciones.js');


const args = process.argv.slice(2);

const operacion = args[0];

if (operacion === 'registrar') {
  const [nombre, edad, animal, color, enfermedad] = args.slice(1);
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
  leer();
} else {
  console.log('La función que esta ingresando no es válida. Por favor usar "registrar" o "leer".');
}
