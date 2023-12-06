var arrayFrutas = ["Banana", "naranja", "fresa"];
// console.log(arrayFrutas);
// metodo push
// este metodo agrega un elemento al final del array

arrayFrutas.push("manzana");
// console.log(arrayFrutas);

// metodo pop
// este metodo elimina el ultimo elemento del array

arrayFrutas.pop();
// console.log(arrayFrutas);

// metodo unshift
// este metodo agrega un elemento al inicio del array

arrayFrutas.unshift("manzana");
// console.log(arrayFrutas);

// metodo shift
// este metodo elimina el primer elemento del array

arrayFrutas.shift();
// console.log(arrayFrutas);

// Metodos de iteracion

// metodo forEach
// este metodo recorre el array y ejecuta una funcion por cada elemento del array

// extructura del forEach
// arrayARecorrer.forEach(function(elementoAImpirmir,indice){}

var arrayPaises = ["Mexico", "Colombia", "Peru", "Argentina"];

arrayPaises.forEach(function (elementoAImpirmir, indice) {
  if (elementoAImpirmir === "Colombia") {
    // console.log('elemento que esta recorriendo', elementoAImpirmir);
    // console.log('indice del elemento', indice);
  }
});
var arrayNumeros = [1, 2, 3, 4];

arrayNumeros.forEach(function (elemento) {
  return elemento + 3;
});

// console.log(arrayNumeros);

arrayNumeros.forEach((elemento, indice) => elemento + 3);

// map
// este metodo lo que hace es devolver un nuevo array con los resultados de la funcion que se le pasa por parametro

var arrayNumeros = [1, 2, 3, 4];

var nuevoArray = arrayNumeros.map(function (elemento) {
  return elemento;
});


// primer array no se modifica
// console.log('array original', arrayNumeros);

// nuevo array con los resultados de la funcion.
// console.log('nuevo array', nuevoArray);


// reduce
// este metodo lo que hace es devolver un unico valor, el resultado de la funcion que se le pasa por parametro

var arrayNumeros = [1, 2, 3, 4];

// el reduce cuando recorre numero los suma y los guarda en el acumulador
var sumaTotal = arrayNumeros.reduce(function (acumulador, elemento) {
  return acumulador + elemento;
});

// console.log(sumaTotal);

// el reduce cuando recorre frases o palabras las concatena y las guarda en el acumulador
var arrayFrases = ["Hola", "como", "estas"];

var fraseCompleta = arrayFrases.reduce(function (acc, element){
  return acc + ' ' + element;
})

// console.log(fraseCompleta);



// Argunmentos de las funciones

function palabras () {
  console.log(arguments);
  console.log(arguments[0].length);
}

// palabras('hola', 'como estas', 'bien', 'y tu');

function frases (...loQueMePasen) {
  console.log(loQueMePasen);
}

frases('hola', 'como estas', 'bien', 'y tu');