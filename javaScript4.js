var persona = {
  nombre: "Juan",
  edad: 30,
};

// dot notation

// como acceder a las propiedas de un objeto
// console.log(persona.nombre);

// como modificar las propiedades de un objeto

persona.nombre = "Pedro";

// console.log(persona.nombre);

var persona2 = {
  nombre: "Juan",
  edad: 30,
};

// agregar con dot notation
persona.nuevoDato = "nuevo dato";

// eliminar

delete persona.nuevoDato;

// -----------------------------------------------------
// bracket notation

// como acceder a las propiedas de un objeto
// console.log(persona2['nombre']);

// como modificar las propiedades de un objeto

persona2["nombre"] = "Pedro";

// console.log(persona2['nombre']);

// agregar con bracket notation
persona2["nuevoDato"] = "nuevo dato";

// eliminar
delete persona2["nuevoDato"];

// -----------------------------------------------------

var objetoPrueba = {
  nombre: "pedro",
  esEstudiante: true,
  edad: 30,
  imprimirNombre: function () {
    console.log("hola pedro");
  },
};

var palabraClave = "edad";
// cuando no sabemos como se llama el key

// console.log(objetoPrueba[palabraClave]); // 30

palabraClave = "nombre";

// console.log(objetoPrueba[palabraClave]);

// objetoPrueba.imprimirNombre();

// console.log(objetoPrueba.hasOwnProperty('nombre')); // true
// console.log(objetoPrueba.hasOwnProperty('nombre2')); // false

// iterando un objeto

// for in

var estudiante = {
  nombre: "Juan",
  edad: 30,
};

// for (var representacionDeDato in estudiante){
//   console.log(representacionDeDato);
//   console.log('-------');
//   console.log(estudiante[representacionDeDato]);
// }

// this

var estudiante2 = {
  nombre: "Juan",
  nombre2: "pedro",
  edad: 30,
  imprimirNombre: function () {
    console.log("", this.nombre);
    console.log("", this.nombre2);
    console.log("", this["nombre"]);
    console.log(this.edad);
  },
  mostrarNombre: function (key) {
    console.log(this[key]);
  },
};

// estudiante2.imprimirNombre();

estudiante2.mostrarNombre("edad"); // 30
estudiante2.mostrarNombre("nombre"); // juan
estudiante2.mostrarNombre("nombre2"); // pedro

// -----------------------------------------------------

var array = [[1, 2, 3], { nombre: "juan" }, "hola", true];

// acceder al valor 3
array[0][2]

// acceder al valor juan
array[1].nombre

var obj = {
  array: [1, 2, 3],
  objeto: { nombre: "juan" },
  string: "hola",
  boolean: true,
};

// acceder al valor 3
obj.array[2]

// acceder al valor juan
obj.objeto.nombre

