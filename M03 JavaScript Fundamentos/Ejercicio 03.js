/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:

   if (x === y){
      return true;
   } 
   // else {
   //    return false;
   // }

   return false;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length === str2.length){
      return true;
   } else {
      return false;
   }
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:

   // if (num < 90){
   //    return true;
   // } else {
   //    return false;
   // }

   // esto se llama operadores ternarios
   // return num < 90 ? true : false

   return num < 90;
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:

   // opcion 1
   // if(num > 50 ){
   //    return true;
   // }
   // else{
   //    return false;
   // }

   // opcion 2
   // return num > 50;

   // opcion 3
   return num > 50 ? true : false;
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:

   // if (num % 2 === 0){
   //    return true;
   // }else {
   //    return false;
   // }

   // opcion 2
   return num % 2 === 0 ? true : false;

   // opcion 3
   // return num % 2 === 0;
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 !== 0){
      return true;
   } else {
      return false;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
