
// Estuctura Map a partir de objeto. Ventaja es que ya viene con getters y settes
let srcObject = {
    name: "John Snow",
    title: "King in the North"
};
let map = new Map(Object.entries(srcObject));

console.log(map.get('name')); //output:  John Snow

// Map desde array
let foodMap = new Map([
    ['burger', 50],
    ['kebap', 40],
    ['pizza', 70]
]);
foodMap.get('burguer');

// iterate over keys (foods)
for (let foods of foodMap.keys()) { //
    console.log(foods); // burger, kebap, pizza
}

// iterate over values (amounts)
for (let amount of foodMap.values()) {
    console.log(amount); // 50, 40, 70
}

// iterate over [key, value] entries
for (let entry of foodMap) { // the same as of foodMap.entries()
    console.log(entry); // burger,50 (and so on)
}
