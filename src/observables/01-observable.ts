import { Observable, Observer } from "rxjs";

// En promesas el async/await sirve para bloquear llamadas asíncronas a promesas
// Para manejar errores se puede usar el operador catchError de rxjs
console.log('Hola Mundo!');

const observer: Observer<string> = {
    next: value => {
        console.log(value);
    },
    error: err => {
        throw new Error("Function not implemented.");
    },
    complete: () => {
        console.log('completado');
    }
};
const obs$ = new Observable<string>(subscriber => {

    subscriber.next('Hola Roque');
    subscriber.next('Adios Roque');
    subscriber.complete();

});

//obs$.subscribe(console.log);
// obs$.subscribe(respuesta => console.log(respuesta));

obs$.subscribe(observer);





