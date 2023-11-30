// Tipos de datos JS

// String
var miNombre = 'Julian'
var miNombre2 = "Julian"

// console.log(miNombre)
// Number 
var nombreVariable = 1
var nombreVariable2 = 1.5
var negativo = -1

// Boolean

var juanEsVerdadero = true
var juanIsFalso = false

// undefined
var variableNoExiste;

// null
var variableNull = null

// objetos
var miArray =['hola', 1, false]
var miObjeto = {}

//  que es el console.log
// console.log('hola mundo.')
// console.log(negativo)


// Operadores aritmeticos

// +

// console.log(1+1);
// console.log('hola ' + 'mundo');
// console.log(1 + '1');
// console.log(1 + 1 + '1');
// console.log(1 + 'a');

// -

// console.log('--------------------------');
// console.log(1-1);
// console.log(5-4)
// console.log('hola' - 'mundo');


// *

// console.log('--------------------------');
// console.log(2*2);
// console.log(2*2.5);

// /

// console.log('--------------------------');

// console.log(2/2);
// console.log(10/ 5);
// console.log('hola' / 5);

// %
// console.log('--------------------------');

// console.log(21 % 5);
// console.log(35 % 7);

// potenciacion

// console.log('--------------------------');
// console.log(2**2);
// 2 * 2 * 2
// console.log(2**3);

// operadores de asoaciacion

// console.log('--------------------------');
// console.log( 1 + 5 * 20 );

var  a = 10;
var b = 5;
var c = 5;

var d = a = b
var d = 5
// console.log('valor de d es ' + d);

// operadores de comparacion

// ==

var var1 = 1
var var2 = '1'

// console.log('usando ==', var1 == var2);

// ===

// console.log('usando ===', var1 === var2);

// !=

// console.log('usando !=', var1 != var2);

// !==

// console.log('usando !==', var1 !== var2);

// > mayor que

var var3 = 5
var var4 = 10
// console.log('usando >  var3 > var4', var3 > var4); // false
// console.log('usando >  var4 > var3', var4 > var3); // true

// < menor que

// console.log('usando <  var3 < var4', var3 < var4); // true
// console.log('usando <  var4 < var3', var4 < var3); // false

// >= mayor o igual que

// console.log( 10 >= 5 ); // true
// console.log( 5 >= 6 ); // false
// console.log( 6 >= 6 ); // true

// <= menor o igual que

// console.log(10 <= 5); // false
// console.log(5 <= 6); // true
// console.log(6 <= 6); // true

// console.log('operadores logicos');
// operadores logicos

var ganoElPartido = true
var pasaDeRonda = true
var ganoFinal = false

// && and

// aca va a dar verdadero porque ambas condiciones son verdaderas
// console.log(ganoElPartido && pasaDeRonda); // true

// aca va a dar falso porque una de las condiciones es falsa
// console.log(ganoElPartido && ganoFinal); // false

// || or
//  alguna de las dos debe ser verdadera para que de verdadero

// console.log(ganoElPartido || pasaDeRonda); // true
// console.log(ganoElPartido || ganoFinal); // true
// console.log(false || false); // false

// ! not

// niega el valor de la variable
// console.log(!ganoElPartido); // false

// metodos de js

// length

var miNombre = 'Julian'
// console.log(miNombre.length);
// console.log(miNombre.toUpperCase());


// metodos para numeros

// console.log(1.5.toFixed(0));

// que es una funcion

// es un bloque de codigo que se puede ejecutar cuando es llamado

function nombreQueQuiera() {
  // aca viene el codigo que quieran ejecutar
  console.log('hola funciones');
  return  'lo que quieran'
}

// si la ejecutamos asi no nos muestra su return
nombreQueQuiera()

// vamos a ver su return usamos console.log

// console.log(nombreQueQuiera());


// funciones con parametros

function suma(a, b, c, d){
  return a + b + c + d
}

// console.log(suma(1,2,3,4));

function returnTrue() {
  return true
}

// console.log(returnTrue());

// estructuras condicionales

var pruebaVariable = false

if (pruebaVariable === true) {
  console.log('esto es true');
} else {
  console.log('esto es false');
}


var saludo = 'no es'

if (saludo === 'hola') {
  console.log('esta saludando')
} else if (saludo === 'chau') {
  console.log('esta despidiendo')
} else {
  console.log('no sabemos que esta haciendo')
}

if (1 === 1) {
  console.log('esto es true');
} else {
  console.log('esto es false');
}

if (true){
  console.log('esto es true');
} else {
  console.log('esto es false');
}

function saludos (idioma){
 if (idioma === 'es') {
  return 'hola'
 } else if (idioma === 'en') {
  return 'hello'
 }
 else {
    return 'no sabemos que idioma es'
 }
}

// aca es el caso de espanol
// console.log(saludos('es'));
// aca es el caso de ingles
// console.log(saludos('en'));
// aca es el caso de otro idioma
// console.log(saludos('fr'));

// objetos Math

console.log('metodos con MATH');
console.log('---------------------------');

//  2* 2 *2 *2 *2
console.log(Math.pow(2, 5));


// redonde hacia arriba despues de 0.5
console.log(Math.round(1.4));

// redonde hacia abajo
console.log(Math.floor(1.9));

// redonde hacia arriba
console.log(Math.ceil(1.1));

// maximo

console.log(Math.max(1,2,3,4,5,6,7,8,9,10));

// minimo
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));



