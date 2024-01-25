let food: { name: string; } | null = { name: "Burger" };
// food is the reference to it

food = null; // overwrite the reference 
// the object will be removed from memory 

/* ------------------- MAP ------------------------- */

let vegetable: { name: string; } | null = { name: "cucumber" };
let mapa = new Map();

mapa.set(vegetable, "green");

vegetable = null; // overwrite the reference
// vegetable is stored inside the map,we can get it 

/* -------------------- WEAKMAP ------------------------ El área principal de aplicación de WeakMap es como almacenamiento de datos adicional. ----*/
/** Ejemplos en https://es.javascript.info/weakmap-weakset
 * Si estamos trabajando con un objeto que “pertenece” a otro código (tal vez incluso una biblioteca de terceros), y queremos almacenar algunos datos asociados a él que solo deberían existir mientras el objeto esté vivo, entonces WeakMap es exactamente lo que se necesita.
 * Otro ejemplo común es el almacenamiento en caché: cuando se debe recordar el resultado de una función (“en caché”), para que las llamadas futuras en el mismo objeto lo reutilicen.
 */
let weakMap1 = new WeakMap();

let obj = {};

weakMap1.set(obj, "ok"); // funciona bien (la clave es un objeto)

// Ahora, si usamos un objeto como clave y no hay otras referencias a ese objeto, se eliminará de la memoria (y del map) automáticamente.

let john: { name: string; } | null = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // sobreescribe la referencia

// ¡John se eliminó de la memoria!

let city: { name: string; } | null = { name: "Istanbul" };

// ! The first difference between Map and WeakMap is that keys must be objects, not primitive values:
let weakMap2 = new WeakMap();
weakMap2.set(city, "...");

city = null; // overwrite the reference
// city is removed from memory.

/*WeakMap no admite la iteración ni los métodos keys(), values(), entries(), así que no hay forma de obtener todas las claves o valores de él.

WeakMap tiene solo los siguientes métodos:

weakMap.set(clave, valor)
weakMap.get(clave)
weakMap.delete(clave)
weakMap.has(clave)*/
/* --------------------- WEAKSET ----------------------- */
let messages = [
    { text: "Merhaba", from: "Oğuz" },
    { text: "Naber?", from: "Sezer" },
    { text: "Dudu Dudu", from: "Tarkan" }
];
let read = new WeakSet();

read.add(messages[0]);
read.add(messages[1]);
read.add(messages[0]);
read.add(messages[0]);
//A message can be read more than once. But the array will not change

messages.shift(); // Borra el primer elemento del array
//When the message is deleted, it is also deleted from the read.