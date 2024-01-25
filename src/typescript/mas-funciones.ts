// Tipos function

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
    // ...
}
// Para cuando se quieran poner propiedades para la función
type DescribableFunction = {
    description: string;
    (someArg: number): boolean; // Observar que en vez de => el retorno de la función es con :
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
    return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);

// Construct signatures
//...

// Generic functions. En TypeScript, los genéricos se utilizan cuando queremos describir una correspondencia entre dos valores.   Hacemos esto declarando un parámetro de tipo 'Type' en la declaración de la función:

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
function firstElementPrueba<LoqueSea>(arr: LoqueSea[]): LoqueSea | undefined {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

// Restricciones. Limitamos a que Type tenga la propiedad length. Recuerde, los genéricos consisten en relacionar dos o más valores con el mismo tipo.
function longest<Str extends { length: number; }>(a: Str, b: Str) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
const arr1 = combine<string | number>([1, 2, 3], ["hello"]);

// Los parámetros de tipo deben aparecer dos veces.
// Recuerde, los parámetros de tipo sirven para relacionar los tipos de múltiples valores
// Si un parámetro de tipo solo se usa una vez en la firma de la función, no relaciona nada.
// Esto incluye el tipo de devolución inferido; por ejemplo, si Str fuera parte del tipo de retorno inferido de greet, estaría relacionando el argumento y los tipos de retorno, por lo que se usaría dos veces a pesar de aparecer solo una vez en el código escrito.


// Parámetros opcionales. Aunque el parámetro se especifica como tipo number, el xparámetro en realidad tendrá el tipo number | undefinedporque los parámetros no especificados en JavaScript obtienen el valor undefined.
//También puede proporcionar un parámetro predeterminado :

function f(x = 10) {
    // ...
}

// Parámetros opcionales en devoluciones de llamada
// En JavaScript, si llama a una función con más argumentos que parámetros, los argumentos adicionales simplemente se ignoran. TypeScript se comporta de la misma manera

// Sobrecargas de funciones

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

function fn(x: string): void;
function fn(): void;
function fn(x?: string) {
    // ...
}
// Expected to be able to call with zero arguments
fn();

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any[] | string) {
    return x.length;
}

// This en una función. TypeScript inferirá cuál thisdebería ser en una función mediante el análisis de flujo de código, por ejemplo en lo siguiente:
const user = {
    id: 123,

    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
/**
 * TypeScript understands that the function user.becomeAdmin has a corresponding this which is the outer object user. this, heh, can be enough for a lot of cases, but there are a lot of cases where you need more control over what object this represents. The JavaScript specification states that you cannot have a parameter called this, and so TypeScript uses that syntax space to let you declare the type for this in the function body.
 */
//interface User { id: number; admin: boolean; becomeAdmin: () => void; };
/*let user2 = {
    id: 123,

    admin: false,
    becomeAdmin: function (): void {
        this.admin = true;
    },
};*/
interface User {
    id: number;
    admin: boolean;
}

declare const getDB: () => DB2;

interface DB2 {
    filterUsers(filter: (this: User) => boolean): User[];
}
const db = getDB();
const admins = db.filterUsers(function (this: User) {
    return this.admin;
});


/**This pattern is common with callback-style APIs, where another object typically controls when your function is called. Note that you need to use function and not arrow functions to get this behavior: */

// Otros tipos que debe conocer
/**
 * void
 * representa el valor de retorno de funciones que no devuelven un valor. Es el tipo inferido cada vez que una función no tiene returndeclaraciones o no devuelve ningún valor explícito de esas declaraciones de retorno:
 * En JavaScript, una función que no devuelve ningún valor devolverá implícitamente el valor undefined. Sin embargo, voidy undefinedno son lo mismo en TypeScript. Hay más detalles al final de este capítulo.
 */
/**
 * object
El tipo especial objectse refiere a cualquier valor que no sea primitivo ( string, number, bigint, boolean, symbol, nullo undefined). Esto es diferente del tipo de objeto vacío { } y también diferente del tipo global Object. Es muy probable que nunca lo uses Object.
objectno es Object. Siempre usa object!
Note that in JavaScript, function values are objects: They have properties, have Object.prototype in their prototype chain, are instanceof Object, you can call Object.keys on them, and so on. For this reason, function types are considered to be objects in TypeScript.
 */

//unknown
//El unknowntipo representa cualquier valor. Esto es similar al anytipo, pero es más seguro porque no es legal hacer nada con un unknownvalor:

function f1(a: any) {
    a.b(); // OK
}
function f2(a: unknown) {
    // a.b();
    //'a' is of type 'unknown'.
}

//Esto es útil al describir tipos de funciones porque puede describir funciones que aceptan cualquier valor sin tener anyvalores en el cuerpo de la función.

//Por el contrario, puedes describir una función que devuelve un valor de tipo desconocido:

function safeParse(s: string): unknown {
    return JSON.parse(s);
}

// Need to be careful with 'obj'!
const objeto = safeParse('someRandomString');

/*Function
El tipo global Functiondescribe propiedades como bind, call, applyy otras presentes en todos los valores de función en JavaScript. También tiene la propiedad especial de que Functionsiempre se pueden llamar valores de tipo; estas llamadas regresan any:*/

function doSomethingElse(f: Function) {
    return f(1, 2, 3);
}

// Parámetros de descanso

function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
/**En TypeScript, la anotación de tipo en estos parámetros es implícita any[]en lugar de any, y cualquier anotación de tipo dada debe ser de la forma Array<T>o T[], o un tipo tupla (que aprenderemos más adelante). */

const arr11 = [1, 2, 3];
const arr22 = [4, 5, 6];
arr1.push(...arr22);
// Inferred as 2-length tuple
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);


//Desestructuración de parámetros

/**Puede utilizar la desestructuración de parámetros para descomprimir cómodamente los objetos proporcionados como argumento en una o más variables locales en el cuerpo de la función. En JavaScript, se ve así: */

function sum({ a, b, c }: { a: number; b: number; c: number; }) {
    console.log(a + b + c);
}
// Same as prior example
type ABC = { a: number; b: number; c: number; };
function sum2({ a, b, c }: ABC) {
    console.log(a + b + c);
}

/**Tipo de devolución
void
El voidtipo de retorno de funciones puede producir un comportamiento inusual pero esperado.

La escritura contextual con un tipo de retorno de voidno obliga a las funciones a no devolver algo. Otra forma de decir esto es un tipo de función contextual con un voidtipo de retorno ( type voidFunc = () => void), cuando se implementa, puede devolver cualquier otro valor, pero será ignorado.

() => voidPor tanto, son válidas las siguientes implementaciones del tipo : */

type voidFunc = () => void;

const f11: voidFunc = () => {
    return true;
};

const f22: voidFunc = () => true;

const f33: voidFunc = function () {
    return true;
};

/**Este comportamiento existe para que el siguiente código sea válido aunque Array.prototype.pushdevuelva un número y el Array.prototype.forEachmétodo espere una función con un tipo de retorno de void.
 */

const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));

// Y cuando el valor de retorno de una de estas funciones se asigna a otra variable, conservará el tipo de void:

const v1 = f11();

const v2 = f22();

const v3 = f33();

function f2x(): void {
    // @ts-expect-error
    return true;
}