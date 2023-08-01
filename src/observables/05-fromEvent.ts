import { fromEvent } from 'rxjs';



const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer = {
    next: value => {
        console.log(value);
    },
    error: value => {
        console.log(value);
    },
    complete: () => {
        console.log('Completado');
    },
}

//src1$.subscribe(observer);
src1$.subscribe(({ x, y }) => {
    console.log(x, y);

});
src2$.subscribe(evento => {
    console.log(evento.key);

});

