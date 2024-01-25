const object1: { a: string, b: number, c: { d: number; }; } = {
    a: 'somestring',
    b: 42,
    c: { d: 12 },
};
let object2 = {}; // es igual que new Object()
let object3 = {};
let object4 = { c: 7 };
console.log(Object.keys(object1));

// Expected output: Array ["a", "b", "c"]

// Copiar objetos
//2. Copiar y sobreescribir
Object.assign(object3, object1); // o object3 = Object.assign({}, object1);
//3. Para que no sobreescriba lo que ya tiene object4.
object4 = Object.assign({}, object1, object4);
// Lo mismo con spread
object4 = { ...object1, ...object4 };
// Otra forma, creando función merge, ver pag 143 libro
console.log(object2);
console.log(object3);
console.log(object4);
