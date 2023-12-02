// for

// como se compone un for

// for (inicializacion; condicion; incremento) {}

for(var i = 0; i < 5; i++){
    // console.log(i);
}


// forma de usar funciones sin parametros
function mostrarletras() {
    var nombre = "Fernando"; // 8

    for (var i = 0; i < nombre.length; i++) {
        console.log(nombre[i]);
    }
}

// mostrarletras();

// forma de usar funciones con parametros
function mostrarletras2(nombre) {
    for (var i = 0; i < nombre.length; i++) {
        console.log(nombre[i]);
    }
}

// mostrarletras2("Fernando");

// while
// valida la condicion luego ejecuta
var condicion = false
var contador = 1;

while (contador  < 3 ){
    // console.log("hola");
    contador++;
}

// do while
// ejecuta luego valida la condicion

// var condicion2 = false;

// do {
//   console.log('hola do while');
// } while (condicion2);


var contador2 = 0;

do {
  // console.log('contador es ', contador2);
  contador2++;
} while (contador2 < 3);


// switch
// es un if pero con mas opciones

// que hace un switch
// evalua una expresion y luego ejecuta un codigo
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

var saludo = "en";

// switch (saludo) {
//   case "es":
//     console.log("hola");
//     break;
//   case "en":
//     console.log("hello");
//     break;
//   case "fr":
//     console.log("bonjour"); 
//     break;
//   default:
//     console.log("no se encontro el idioma");
//     break;
// }


function saludar (idioma){
  switch (idioma) {
    case "es":
      console.log("hola como estas");
      break;
    case "en":
      console.log("hello how are you");
      break;
    case "fr":
      console.log("bonjour comment ca va"); 
      break;
    default:
      console.log("no se encontro el idioma");
      break;
  }
}

// esta seria la forma con el if y else if
// if (saludo === "es"){
//   console.log("hola");
//   return
// } else if (saludo === "en"){
//   console.log("hello");
//   return
// } else if (saludo === "fr"){
//   console.log("bonjour");
//   return
// } else{
//   console.log("no se encontro el idioma");
//   return
// }


// saludar("es");
// saludar("fr");
// saludar("enss");

// arrays

var array = [1,2,3,4,5];
var diferentesTipos = [1, "hola", true, null, undefined, [1,2,3,4,5], {nombre: "Fernando", apellido: "Sandoval"}];
var arraySaludos = ["hola", "hello", "bonjour"];

// mostramos todo el array
// console.log(array);

// queremos ver el 3 que esta dentro del array
// console.log(array[2]);
// console.log('array saludos', arraySaludos);
// console.log('array saludos en ingles', arraySaludos[1]);

// queremos modificar el saludo en la posion 0

arraySaludos[0] = 'Como estas'
// console.log('array saludos modificado', arraySaludos);

// recorremos el array saludos con for


var arraySaludos = ["hola", "hello", "bonjour"];

for (var i = 0; i < arraySaludos.length; i++){
  console.log('mostramos saludos pero con el for');
  console.log(arraySaludos[i]);
  console.log('------------------------');
}

//  recorremos el array con el for of

// for como funciona
// for (variableQueQueramos of array) {}


var arrayFrutas = ["manzana", "fresa", "banana"];

for (key of arrayFrutas) {
  console.log('mostramos las veces que se repite el for of');
}