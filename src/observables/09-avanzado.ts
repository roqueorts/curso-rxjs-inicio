import { from, of } from 'rxjs';


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


/* of */
const srcOf$ = of([1, 2, 3, 4, 5]);

/* from  */

const srcFrom$ = from('Roque');
const srcFrom2$ = from<Promise<Response>>(fetch('https://api.github.com/users/klerith'));

srcOf$.subscribe(observer);
srcFrom$.subscribe(observer);
// srcFrom2$.subscribe(observer);
/* Trabajando la respuesta con promesas
srcFrom2$.subscribe(async (resp) => {

    const dataResp = await resp.json();
    console.log(dataResp.name);

}); */

/* From también puede usar funciones generadoras */
const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
};

const miIterable = miGenerador();

/*for (let id of  miIterable ) {
console.log(id);

}*/

from(miIterable).subscribe(observer);