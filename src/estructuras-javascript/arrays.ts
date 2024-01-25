export { }; // Poniendo ésto ya se convierte en módulo
// @filename: arrays.ts
export default function moduloArray() { // El default se puede omitir, para exportar más funciones, variables, clases,...
    // Array
    let frutas = ["Manzana", "Pera"];
    let hola = "hola π";
    frutas.forEach((elemento, indice, array) => {
        console.log(elemento, indice);
        // console.log(hola);

    });
    // Copia array
    let copia = frutas.slice();
    frutas.pop();
    console.log(frutas);
    console.log(copia);


    let a = new Array('a', 'b');

    // console.log(Array[Symbol.species]); // Devuelve el constructor
    console.log(a);
    console.log(Array.from('foo')); // Expected output: Array ["f", "o", "o"]

    console.log(Array.from([1, 2, 3], (x) => x + x));// Expected output: Array [2, 4, 6]
    Array.of(7); // [7]
    Array.of(1, 2, 3); // [1, 2, 3]
    Array(7); // [ , , , , , , ]

    console.log(Array.prototype);
    console.log(a.find((element, index, array) => element === 'b'));
    const array1 = ['a', 'b', 'c'];
    const iterator = array1.keys(); // Devuelve una función iterator con los índices del array
    const iterator2 = array1.values(); // Devuelve una función iterator con los valores del array
    for (const key of iterator) {
        console.log(key); // Expected output: 0    // Expected output: 1     // Expected output: 2
    }

    // Array.prototipe.map
    var numbers = [1, 5, 10, 15];
    var doubles = numbers.map((x) => {
        return x * 2;
    });

    console.log(doubles);

    // Array.prototipe.reduce
    const array2 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    console.log(sumWithInitial);
    // Expected output: 10

    let valores = [];
    for (let x = 0; x < 10; x++) {
        valores.push([2 ** x, 2 * x ** 2]);
    }
    console.table(valores);
}