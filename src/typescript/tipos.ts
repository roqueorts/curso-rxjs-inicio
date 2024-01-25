// string, number, boolean, any
let cadena: string;
let cadenaString = "Hello World";


// funciones 
function hola(name: string) {
    console.log("Hola, " + name.toUpperCase() + "!!");
}

// tipos object
function printName(obj: { first: string; last?: string; }) {

    // Error - might crash if 'obj.last' wasn't provided! No aparece la sugerencia

    console.log(obj.last?.toUpperCase());
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }

    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}

printName({ first: 'a' });


// tipos union
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    } else {
        console.log("Welcome lone traveler " + x);
    }
}

// Alias para los tipos object y union. Es darle un nombre a esos tipos

type Point = { x: number, y: number; };
type ID = number | string;
let algo: ID = 5;
let punto: Point = { x: 4, y: 5 };

// Interfaces. Una declaración de interfaz es otra forma de nombrar un tipo de objeto
/**Los alias de tipo y las interfaces son muy similares y, en muchos casos, puedes elegir entre ellos libremente. Casi todas las funciones de un interfaceestán disponibles en type, la distinción clave es que un tipo no se puede volver a abrir para agregar nuevas propiedades frente a una interfaz que siempre es extensible. */

// Extender interface
interface Pointer { x: number, y: number; };
let puntointerface: Pointer = { x: 4, y: 5 };

interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}
const bear: Bear = { name: 'osobuco', honey: true };
console.log(`${bear.name}  ${bear.honey ? 'come miel' : 'no come'}`);

// Agregar nuevas propiedades
interface Test {
    a: string;
}

interface Test {
    b: string;
}

const test: Test = { a: 'Hola ', b: 'Nueva propiedad' };
console.log(test.a + test.b);

/**Type Assertions
Sometimes you will have information about the type of a value that TypeScript can’t know about.

For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

In this situation, you can use a type assertion to specify a more specific type.
Reminder: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong. TypeScript only allows type assertions which convert to a more specific or less specific version of a type
Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce later), then to the desired type:

const a = expr as any as T;
 */
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// Es equivalente a
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

// Tipos Literal

const constantString = "Hello World"; // sería como const constantString: "Hello World", no se puede cambiar el valor. 
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;

// Por sí solos, los tipos literales no son muy valiosos:

let x: "hello" = "hello";
// OK
x = "hello";
// Pero al combinar literales en uniones, puedes expresar un concepto mucho más útil, por ejemplo, funciones que solo aceptan un cierto conjunto de valores conocidos:

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
// Hay un tipo más de literal: los literales booleanos.El tipo booleanen sí es en realidad sólo un alias de la unión true | false

/**Inferencia literal
Cuando inicializas una variable con un objeto, TypeScript asume que las propiedades de ese objeto podrían cambiar sus valores más adelante. Por ejemplo, si escribiste un código como este:
 */
const objs = { counter: 0 };
objs.counter = 1; // TypeScript no asume que la asignación de 1un campo que anteriormente tenía 0sea un error.
const xc = 'pepe'; // Cuando no es objecto, no se puede cambiar el valor
//xc = 'ff';  daría error


/**Lo mismo se aplica a las cadenas:
 */
declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method); // En el ejemplo req.method se infiere que es string, no "GET".
/**
 * Hay dos formas de solucionar este problema.

Puede cambiar la inferencia agregando una aserción de tipo en cualquier ubicación:

// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
Intentar
El cambio 1 significa "Tengo la intención de req.methodtener siempre el tipo literal "GET" ", evitando la posible asignación de "GUESS"a ese campo después. El cambio 2 significa "Sé por otras razones que req.methodtiene el valor "GET"".

Puede utilizar as constpara convertir todo el objeto en literales de tipo:

const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
Intentar
El as constsufijo actúa como constpero para el sistema de tipos, asegurando que a todas las propiedades se les asigne el tipo literal en lugar de una versión más general como stringo number.
 */

// null y undefined. Se deben comprobar antes de hacer nada con ellos

function doSomething0(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}

// otra forma sería con el Non-null Assertion Operator (Postfix !)
function doSomething2(x?: string | null) {

    console.log("Hello, " + x!.toUpperCase()); // Sólo se ejecuta cuando el valor de x no es ni null ni undefined
}

// Enumeraciones. Ver https://www.typescriptlang.org/docs/handbook/enums.html

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

// Less Common Primitives

//  Bigint. Desde ES2020 en adelante, hay una primitiva en JavaScript que se usa para enteros muy grandes BigInt:
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;


// symbol . Primitiva para crear referencia única a nivel global

const firstName = Symbol("name");
const secondName = Symbol("name");

/*if (firstName === secondName) {
// This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // Can't ever happen
}*/