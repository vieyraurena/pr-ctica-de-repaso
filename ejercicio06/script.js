//Ingresar número
//crear valores booleanos numPrimo == true
//crear un ciclo para que lea todos los numeros hasta el numero ingresado
//dentro del ciclo hacer un if para especificar  que si es residuo es entero el numPrimo es falso
//fuera del ciclo especificar con if si el numPrimo es == true
//y el ese seria un num compuesto


let dato = parseInt(prompt('Ingrese un número para comprobar sí es un número primo'));

let numPrimo = true;
for (i = 2; i < dato; i++){
  if (dato % i == 0 ){
    numPrimo = false;
  }
}
if(numPrimo){
  console.log('El número es primo');
} else {
  console.log('El número es compuesto');
}
