
class arrays {
    constructor(parameters: string) {

    }
    // Array
    frutas = ["Manzana", "Pera"];
    hola = "fuera";
    name(params: string) {
        this.hola = "dentro";
        this.frutas.forEach((elemento, indice, array) => {
            console.log(elemento, indice);
            console.log(this.hola);

        }, this); // parámetro this es opcional
    }


}

const arraysClase = new arrays("arguments");
arraysClase.name('');
