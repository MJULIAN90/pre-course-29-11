/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:

   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

   return array[array.length - 1];

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   for (i = 0; i < array.length; i++) {
      array[i] += 1; 
   } 
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   // opcion 1
   // return palabras.join(' ');

   // opcion 2
   // var palabras = ['Hello', 'world!']
   // primer ciclo
   // acc = 'Hello'
   // segundo ciclo
   // acc = 'Hello world!'

   var frase = palabras.reduce(function(acc, el){
      return acc + ' ' + el;
   })   

   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   // opcion 1
   // return array.includes(elemento);

   // opcion 2
   for (i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
         return true;
      }
   }
   return false;
}

function agregarNumeros(arrayOfNums) { 
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   var suma = arrayOfNums.reduce(function (acc, element) { return acc + element; })
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   // opcion 1
   // array = [1, 2, 3, 4, 5]
   // return (resultadosTest.reduce(function (acc, element) { return acc + element; }) / resultadosTest.length);

   // opcion 2
   return (agregarNumeros(resultadosTest) / resultadosTest.length);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   // opcion 1

   // [1, 2, 3, 4, 5]
   // return Math.max(1, 2, 3, 4, 5);
   // return Math.max(...arrayOfNums);

   // opcion 2
   // [1, 2, 3, 4, 5]

   // var max = arrayOfNums[0];
   // for (var num of arrayOfNums) {
   //    if (max < num) {
   //       max = num;
   //    }
   // }

   // return max;

   // opcion 3

   // [1, 2, 3, 4, 5]
   var max = arrayOfNums[0]

   for (var i = 1; i < arrayOfNums.length; i++) {
      if (max < arrayOfNums[i]) {
         max = arrayOfNums[i];
      }
   }

   return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   // opcion 1
   // if (arguments.length === 0) return 0;

   // if (arguments.length === 1) return arguments[0]; 
   
   // var resultado = arguments[0];

   // // [10, 2, 3, 0, 5]
   // for (var i = 1; i < arguments.length; i++) { 
   //    resultado = (resultado * arguments[i]); 
   // }

   // return resultado;

   // opcion 2
   if (arguments.length === 0) { 
      return 0; 
   } else {
      multi = 1 
      for (num of arguments) {
         multi *= num; 
      } 
      return multi; 
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   // opcion 1
   // var mayores = 0;

   // for (var i = 0; i < array.length; i++) {
   //    if (array[i] > 18) {
   //       mayores++;
   //    }
   // }

   // return mayores;

   // opcion 2
   var cuenta = 0; 
   for (num of array) { 
      if (num > 18) { 
         cuenta++; 
      }
   } 

   return cuenta;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   // opcion 1
   // switch (numeroDeDia) { 
   //    case 7: 
   //       return "Es fin de semana" 
   //    case 1: 
   //       return "Es fin de semana" 
   //    default: 
   //       return "Es dia laboral" 
   // }

   // opcion 2
   // return (numeroDeDia > 1 && numeroDeDia < 7) ? "Es dia laboral" : "Es fin de semana"; 

   // opcion 3
   if (
         numeroDeDia === 2 || 
         numeroDeDia === 3 || 
         numeroDeDia === 4 || 
         numeroDeDia === 5 || 
         numeroDeDia === 6
      ) { 
      return "Es dia laboral"; } 
      else { return "Es fin de semana"; 
   } 

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   // opcion 1 larga
   // return (num.toString()[0] === "9") ? true : false; 

   // opcion 2 corta
   return num.toString()[0] === "9";

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   // opcion 1
   var primer = array[0]; 

   for (i = 1; i < array.length; i++) { 
      if (array[i] != primer) { 
         return false; 
      } 
   }
   return true;

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   // opcion 1
   // var meses = []; 
   // for (mes of array) { 
   //    if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") { 
   //       meses.push(mes); 
   //    } 
   // } 

   // if (meses.length === 3) { 
   //    return meses; 
   // } else { 
   //    return "No se encontraron los meses pedidos"; 
   // }

   // opcion 2
   // var mesesPerdidos = ["Enero", "Marzo", "Noviembre"]; 
   var mesesEncontrados = []; 
   
   for (var i = 0; i < array.length; i++) { 
      if (["Enero", "Marzo", "Noviembre"].includes(array[i])) { 
         mesesEncontrados.push(array[i]);
      } 
   } 
   
   if (mesesEncontrados.length === 3) { 
      return mesesEncontrados; 
   } else { 
      return "No se encontraron los meses pedidos"; 
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   // opcion 1
   // tabla = [0]; 
   // for (i = 6; i <= 60; (i += 6)) {
   //    tabla.push(i);
   // } 
   // return tabla;

   // opcion 2
   var resultados = []; 

   for (var i = 0; i <= 10; i++) { 
      // var resultado = 6 * i; 
      resultados.push(6 * i); 
   } 
   
   return resultados;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   // var masQueCien = []; 
   
   // for (var i = 0; i <= array.length; i++) { 
   //    if (array[i] > 100) { 
   //       masQueCien.push(array[i]) 
   //    } 
   // } 
   
   // return masQueCien;

   // opcion 2

   mayor = []; 
   
   for (num of array) { 
      if (num > 100) {
         mayor.push(num); 
      }
   }

   return mayor 
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
