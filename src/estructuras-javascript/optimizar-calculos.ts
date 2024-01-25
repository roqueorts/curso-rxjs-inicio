/*A continuación, te proporciono algunos consejos generales que pueden ayudarte a mejorar el rendimiento de tus cálculos en TypeScript y reducir el coste de la CPU:

1. Utiliza algoritmos eficientes: Algunos algoritmos son más eficientes que otros para realizar ciertas tareas. Por ejemplo, la búsqueda binaria es más eficiente que la búsqueda lineal para buscar elementos en una lista ordenada. Método de ordenación de la burbuja. Asegúrate de utilizar los algoritmos más eficientes para tus necesidades.

1. Evita la repetición de cálculos: Si tienes que realizar un cálculo varias veces, considera almacenar el resultado en una variable en lugar de volver a calcularlo cada vez. Esto puede ahorrar tiempo y reducir el coste de la CPU.

Utiliza tipos de datos adecuados: Utiliza los tipos de datos adecuados para tus variables. Por ejemplo, si sabes que una variable solo contendrá números enteros, utiliza el tipo number en lugar de any. Esto puede mejorar el rendimiento de tus cálculos. El uso de Map, Set, WeakMap, WeakSet...

Evita las operaciones innecesarias: Si tienes que realizar varias operaciones en una sola línea de código, considera si todas las operaciones son necesarias. Si no lo son, elimina las operaciones innecesarias para reducir el coste de la CPU.

Optimiza el uso de la memoria: Si estás trabajando con grandes conjuntos de datos, considera cómo puedes optimizar el uso de la memoria. Por ejemplo, si solo necesitas acceder a una parte de un conjunto de datos a la vez, considera dividir el conjunto de datos en partes más pequeñas y trabajar con una parte a la vez.*/

// Busqueda Binaria

function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = binarySearch(arr, target);

if (result === -1) {
    console.log(`El elemento ${target} no se encuentra en el arreglo.`);
} else {
    console.log(`El elemento ${target} se encuentra en la posición ${result}.`);
}

// Ordenación método burbuja
function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr2: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArr: number[] = bubbleSort(arr2);

console.log(`La lista ordenada es: ${sortedArr}`);

// Quick sort. Más eficiente
function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot: number = arr[0];
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([4, 53, 22, 10, 2, 74, 91, 33, 25, 14, 19, 100, 256, 81, 7, 300]));


// Merge-sort
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    const half: number = Math.floor(arr.length / 2);
    const first: number[] = mergeSort(arr.slice(0, half));
    const second: number[] = mergeSort(arr.slice(half));
    return merge(first, second);
}

function merge(a: number[], b: number[]): number[] {
    const c: number[] = [];
    while (a.length && b.length) {
        if (a[0] < b[0]) {
            c.push(a.shift()!);
        } else {
            c.push(b.shift()!);
        }
    }
    while (a.length) {
        c.push(a.shift()!);
    }
    while (b.length) {
        c.push(b.shift()!);
    }
    return c;
}

console.log(mergeSort([4, 53, 22, 10, 2, 74, 91, 33, 25, 14, 19, 100, 256, 81, 7, 300]));

/**
 * ¡Hola! Claro, puedo ayudarte con eso. Aquí te presento algunos algoritmos de ordenación comunes:

Selection sort (selección): Este algoritmo recorre el arreglo varias veces y en cada iteración encuentra el elemento más pequeño y lo coloca al principio del arreglo. Luego, el algoritmo continúa con el siguiente elemento más pequeño y lo coloca en la segunda posición, y así sucesivamente. La complejidad temporal de este algoritmo es O(n^2) 1.

Bubble sort (burbuja): Este algoritmo compara los elementos adyacentes del arreglo y los intercambia si están en el orden equivocado. El algoritmo continúa haciendo esto hasta que no se necesiten más intercambios. La complejidad temporal de este algoritmo es O(n^2) 1.

Insertion sort (inserción): Este algoritmo recorre el arreglo y en cada iteración inserta el elemento actual en su posición correcta en el subarreglo ordenado que se encuentra a la izquierda del elemento. La complejidad temporal de este algoritmo es O(n^2) 1.

Merge sort (combinación): Este algoritmo divide el arreglo en dos mitades, ordena cada mitad recursivamente y luego combina las dos mitades ordenadas en un solo arreglo ordenado. La complejidad temporal de este algoritmo es O(n log n) 1.

Quick sort (rápida): Este algoritmo elige un elemento pivote del arreglo, coloca todos los elementos menores que el pivote a su izquierda y todos los elementos mayores que el pivote a su derecha, y luego ordena recursivamente los subarreglos a la izquierda y a la derecha del pivote. La complejidad temporal de este algoritmo es O(n log n) en promedio y O(n^2) en el peor de los casos 1.

Heap sort (montón): Este algoritmo convierte el arreglo en un árbol binario completo (un montón), extrae el elemento máximo del montón y lo coloca al final del arreglo, y luego reconstruye el montón. La complejidad temporal de este algoritmo es O(n log n) 1.

Espero que esto te ayude. ¡Házmelo saber si tienes alguna otra pregunta!
 * 
 * 
 * Merge sort (combinación): Este algoritmo divide el arreglo en dos mitades, ordena cada mitad recursivamente y luego combina las dos mitades ordenadas en un solo arreglo ordenado. La complejidad temporal de este algoritmo es O(n log n) 1.
 * 
 * Bubble sort (burbuja): Este algoritmo compara los elementos adyacentes del arreglo y los intercambia si están en el orden equivocado. El algoritmo continúa haciendo esto hasta que no se necesiten más intercambios. La complejidad temporal de este algoritmo es O(n^2) 1.
 * 
 */