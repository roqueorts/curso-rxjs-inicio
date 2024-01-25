import { from, of, range } from 'rxjs';



const src1$ = of(1, 2, 3, 4, 5);
const src2$ = range(1, 10); //.pipe(observeOn(asyncScheduler));
const src3$ = from([1, 2, 3]);


const observer = {
    next: (value: any) => {
        console.log(value);
    },
    error: (value: any) => {
        console.log(value);
    },
    complete: () => {
        console.log('Completado');
    },
};

console.log('inicio');

src1$.subscribe(value => {
    console.log(value);

});
src2$.subscribe(value => {
    console.log(value);

});
src3$.subscribe(value => {
    console.log(value);

});

console.log('fin');

