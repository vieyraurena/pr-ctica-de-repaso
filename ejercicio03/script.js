//hacer una variable para ingresar el string
//usar el método split para separar cada palabra
//usar el método reverse para darle vuelta
//y por último usar el método join para unir la frase

const str = prompt('Ingrese una frase');
const palabras = str.split(' ');
//console.log(palabras)
const reversa = palabras.reverse();
//console.log(reversa);
const juntar = reversa.join(' ');
console.log(juntar);

