import { range, of, observeOn, asyncScheduler, interval, timer } from 'rxjs';



const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5);
const observer = {
    next: value => {
        console.log('next: ', value);
    },
    error: value => {
        console.log(value);
    },
    complete: () => {
        console.log('Completado');
    },
}

console.log('inicio');

// interval$.subscribe(observer);
timer$.subscribe(observer);

console.log('fin');

