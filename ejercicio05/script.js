const numSecreto = 32;
let index = 0;
let datosNum = 1;

while (datosNum !== index) {
  datosNum = parseInt(prompt('Adivina un número del 1 al 100'));
  if (datosNum > numSecreto && datosNum < 101) {
    console.log(`Falló, el número ${datosNum}  es MAYOR al secreto`);
  } else if (datosNum < numSecreto && datosNum >= -1) {
    console.log(`Falló, el número ${datosNum} es MENOR al secreto`);
  } else if (datosNum == numSecreto) {
    datosNum = index
    console.log('ADIVINASTE');
  } else {
    datosNum = index;
  }
}

