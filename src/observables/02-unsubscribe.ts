import { Observable } from "rxjs";

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

    };
});


const subscription = intervalo$.subscribe(num => console.log(num));

setTimeout(() => {
    subscription.unsubscribe();
}, 3000);






