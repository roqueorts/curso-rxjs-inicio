
type Fish2 = { swim: () => void; };
type Bird2 = { fly: () => void; };

function move2(animal: Fish2 | Bird2) {
    if ("swim" in animal) {
        return animal.swim();
    }

    return animal.fly();
}
let animal: Fish2 = { swim: () => 'tiburon' };
let animal2: Bird2 = { fly: () => 'gorrión' };
console.log(move2(animal2));
