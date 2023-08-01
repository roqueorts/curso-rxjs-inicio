import { from, of, range, fromEvent } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

interface Persona {
    idx: number,
    nombre: string
}
const personas: Persona[] = [
    {

        idx: 1,
        nombre: 'roque'
    },
    {

        idx: 2,
        nombre: 'juan'
    },
    {

        idx: 3,
        nombre: 'roque'
    },
];

// filter
const filter$ = range(1, 10).pipe(filter(val => val % 2 === 1));
const filter2$ = range(1, 10).pipe(filter((val, index) => {
    // console.log('index ', index);
    return val % 2 === 1;
}));
const filter3$ = from(personas).pipe(filter((persona, index) => {
    //console.log('index ', index);

    return persona.nombre === 'roque';
}));


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), // sale un string
    filter((value, index) => value === 'Enter'),
    catchError((err) => { return err; })
);

// filter$.subscribe(data => console.log('impares ', data));
// filter2$.subscribe(data => console.log('impares ', data));
// filter3$.subscribe(data => console.log('nombre filtrado ', data));

keyup$.subscribe(console.log);



