// Null es un 'object'
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            // Si quitamos del if 'strs &&' nos daría el error => 'strs' is possibly 'null'.
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}
function printAll2(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS! No es correcto porque la cadena vacía no la imprimiría, y queremos que se imprima
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

// if booleano
/**
 * Todos los siguientes valores en un 'if' devuelven false. El reto True.
    0
    NaN
    "" (the empty string)
    0n (the bigint version of zero)
    null
    undefined
 */
// Con la doble negación !! o la función Boolean, pasamos un null,undefined o los valores anteriores a false
// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true,    value: true

// null y undefined son iguales
let str = undefined;
if (str == null) {
    console.log('iguales');
}

// Operador in para buscar propiedades 

type Fish = { swim: () => void; };
type Bird = { fly: () => void; };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }

    return animal.fly();
}

let pez: Fish = { swim: () => 'tiburon' };
let pájaro: Bird = { fly: () => 'gorrión' };
console.log(move2(pájaro));

// instanceof
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// asignaciones
let x1 = Math.random() < 0.5 ? 10 : "hello world!"; //quedaría en let x1: string | number

x1 = 1;
console.log(x1); // let x1: number. aunque el tipo cambia a number, siempre prevalece la declaración, que fué number | string
x1 = "goodbye!";
console.log(x);//  let x1: string

function example() {
    let x3: string | number | boolean;

    x3 = Math.random() < 0.5;

    console.log(3); // let x2: boolean

    if (Math.random() < 0.5) {
        x3 = "hello";
        console.log(x3); // let x: string
    } else {
        x3 = 100;
        console.log(x3); // let x: number
    }

    return x3;//let x: string | number. Typescript se desprende del booleano porque sabe que aquí ya no llega.
}

// predicados de tipo
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
/**
 * pet is Fishes nuestro predicado de tipo en este ejemplo. Un predicado toma la forma parameterName is Type, donde parameterNamedebe ser el nombre de un parámetro de la firma de la función actual.
 */

// Discriminated unions

interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius! ** 2; // Ojo al !. Hemos llegado a un punto en el que sabemos más sobre nuestros valores que el verificador de tipos. Podríamos intentar utilizar una afirmación no nula (un !after shape.radius) para decir que radiusdefinitivamente está presente.
    }
}

/*El problema con esta codificación Shapees que el verificador de tipos no tiene ninguna forma de saber si están presentes o no radiusen sideLengthfunción de la kindpropiedad. Necesitamos comunicar lo que sabemos al verificador de tipos. Con eso en mente, demos otro paso para definir Shape.*/

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape2 = Circle | Square;
function getArea2(shape: Shape2) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2; //   (parameter) shape: Circle
    }
}
/**Las uniones discriminadas sirven para algo más que hablar de círculos y cuadrados. Son buenos para representar cualquier tipo de esquema de mensajería en JavaScript, como cuando se envían mensajes a través de la red (comunicación cliente/servidor) o codifican mutaciones en un marco de gestión de estado. */

// never. TypeScript usará un never tipo para representar un estado que no debería existir.
/**The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.

For example, adding a default to our getArea function which tries to assign the shape to never will not raise an error when every possible case has been handled. */
type Shape3 = Circle | Square;

function getArea3(shape: Shape3) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// Adding a new member to the Shape union, will cause a TypeScript error:

interface Triangle {
    kind: "triangle";
    sideLength: number;
}

type Shape4 = Circle | Square | Triangle;

function getArea4(shape: Shape4) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape; // si no añadimos el case 'triangle' nos dará un error, éste caso no debería darse nunca. 
            // el error salta porque no se puede asignar ningún tipo a never :)
            //Type 'Triangle' is not assignable to type 'never'.
            return _exhaustiveCheck;
    }
}