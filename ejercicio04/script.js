//Hacer dos variables una para la frase y otra para el carácter
//Hacer una variable vacia para el array para almacenar después el caácter
//Iniciar un for de la frase
//Hacer un if para buscar una igual de carácteres
//Imprimir fuera del ciclo las veces que se repetio.


const frase = prompt('Ingrese una frase');
const caracter = prompt('Ingrese un carácter');
//console.log(frase.length)

let veces = [];
for (let i = 0; i < frase.length; i++) {
  if (frase[i] == caracter){
    veces.push(i);
  }
}

console.log(veces.length);

