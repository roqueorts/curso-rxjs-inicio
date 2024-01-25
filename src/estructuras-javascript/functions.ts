// Functions
//const suma = new Function('a', 'b', 'return a + b');

//console.log(suma(2, 6));
// Expected output: 8

class prueba {

    valor;
    constructor() {
        this.valor = 10;
    }

    pruebas(a: number, b: number) {
        return a + b + this.valor;
    };


}
// Ejemplo Metodo call
const clase = new prueba();
class test1 {
    valor = 5;
    pru() {
        // se le pasa el this de test1
        console.log(clase.pruebas.call(this, 2, 2));
    }

}

const clase2 = new test1();
console.log(clase2.pru()); // muestra 9
console.log(clase.pruebas(2, 2)); // Muestra 14
