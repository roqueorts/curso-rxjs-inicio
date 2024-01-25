
// Almacena sólo valores, y no repetidos, Ventaja es que, pueden ser objetos de diferente tipo, no se repiten, el rendimiento del método has es mayor que el del include
let vegetables = new Set();
let foodMap2 = new Set(['burger', 'kebap', 'pizza']);
foodMap2.has('burguer');

let cucumber = { name: "cucumber" };
let onion = { name: "onion" };
let potato = { name: "Potato" };
type names = {
    name: string;
};
// add multiple times
vegetables.add(cucumber);
vegetables.add(cucumber);
vegetables.add(onion);
vegetables.add(potato);
vegetables.add(onion);
vegetables.add(potato);

// set is a unique values collectionn
console.log(vegetables.size); //output: 3
console.log(vegetables); //output: 
console.log(vegetables.has(cucumber)); //output: 
// iterar
vegetables.forEach((value) => console.log(value)); //// imprime en consola los elementos en el orden de entrada
for (let item of vegetables) console.log(item); //// imprime en consola los elementos en el orden de entrada
// imprime en consola los elementos en el orden:
//   { name: "cucumber" }, { name: "onion" }, { name: "potato" }
// (key y value son los mismos aquí)
for (let [key, value] of vegetables.entries()) console.log(key);

// convertir el objeto Set en un objeto Array, con Array.from
const myArr = Array.from(vegetables); // [{ name: "cucumber" }, { name: "onion" }, { name: "potato" }]
console.log(myArr);
// lo siguiente también funcionará si se ejecuta en un documento HTML
vegetables.add(document.body);
console.log(vegetables.has(document.querySelector('body')));// true

// conversión entre Set y Array
const mySet2 = new Set();
mySet2.add(1); // Set [ 1 ]
mySet2.add(5); // Set [ 1, 5 ]
mySet2.add(5); // Set [ 1, 5 ]
mySet2.add("texto de prueba");
const o = { a: 1, b: 2 };
mySet2.add(o);
console.log(mySet2.size);                    // 4

console.log([...mySet2]);                   // [1, 2, 3, 4]


// la intersección se puede simular a través de
const mySet1 = new Set([1, 5, "algún texto"]);
mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add("texto de prueba"); // Set [ 1, 5, 'algún texto' ]

const intersection = new Set([...mySet1].filter(x => mySet2.has(x)));
// console.log("La intersección es: " + intersection);

// la diferencia se puede simular mediante
const difference = new Set([...mySet1].filter(x => !mySet2.has(x)));

// iterar entradas de Set con forEach()
intersection.forEach(function (value) {
    console.log(value); //
});

// Use Set para garantizar la unicidad de una lista de valores
const array = Array.from(document.querySelectorAll("[id]")).map(function (e) {
    return e.id;
});

const set = new Set(array);

console.assert(set.size == array.length);
console.log(set.size == array.length);
