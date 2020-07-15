//hacer un split para separar  la frase por palabras
//hacer un join para juntar esas palabras.
//imprimir la frase

const frase = prompt('Ingrese una frase');
const palabras = frase.split(' ');
//console.log(palabras)
const juntar = palabras.join('');
console.log(juntar);