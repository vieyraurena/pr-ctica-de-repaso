//Solicitar al usuario que escriba un año
//Condicion con if
//Indicara si es bisiesto o no

let year = parseInt(prompt('Ingrese el año deseado, para indicarle sí es o no bisiesto'));

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
  console.log('El año sí es bisiesto');
} else {
  console.log('El año no es bisiesto');
}
