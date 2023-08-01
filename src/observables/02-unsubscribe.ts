import { Observable, Observer } from "rxjs";

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
const intervalo$ = new Observable<number>(subscriber => {

    // Crear un contador
    let count = 0;
    const intervalo = setInterval(() => {
        count++;
        subscriber.next(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => { // El return se ejecuta cuando se hace el unsubscribe
        clearInterval(intervalo);
        console.log('Intervalo destruído');

    }
});


const subscription = intervalo$.subscribe(num => console.log(num));

setTimeout(() => {
    subscription.unsubscribe();
}, 3000);






