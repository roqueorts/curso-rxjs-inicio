import { Observer, fromEvent, interval } from 'rxjs';
import { concatMap, exhaustMap, mergeMap, switchMap, take, tap } from 'rxjs/operators';

const observer: Observer<MouseEvent> = {
    next: value => {
        console.log('click ' + value);
    },
    error: err => {
        throw new Error("Function not implemented.");
    },
    complete: () => {
        console.log('completado');
    }
};
// fromEvent
const click$ = fromEvent<MouseEvent>(document, 'click');

// concatMap espera a que termine un observable para después iniciar el siguiente
click$.pipe(
    tap(observer.next),
    concatMap(() => interval(1000).pipe(take(5)))
)
    .subscribe(valor => console.log(valor));

// switchMap cancela un observable que había iniciado para iniciar el nuevo
click$.pipe(
    tap(observer.next),
    switchMap(() => interval(1000).pipe(take(5)))
)
    .subscribe(valor => console.log(valor));

// mergeMap no espera a que termine un observable para iniciar el siguiente
click$.pipe(
    tap(observer.next),
    mergeMap(() => interval(1000).pipe(take(5)))
)
    .subscribe(valor => console.log(valor));

// exhaustMap ignora por completo un observable/evento nuevo mientras no termine el iniciado
click$.pipe(
    tap(observer.next),
    exhaustMap(() => interval(1000).pipe(take(5)))
)
    .subscribe(valor => console.log(valor));