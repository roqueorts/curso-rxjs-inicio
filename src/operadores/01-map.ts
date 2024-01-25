import { fromEvent, range } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// range
range(1, 5).pipe(
    map<number, number>((val: number) => { // recibe un number y tiene que devolver un number
        return val * 10;
    }),
    catchError((err) => { return err; }));

// fromEvent
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

// map
const keyupCode$ = keyup$.pipe(map(event => event.code));
// The EventTarget type does not inherit from HTMLElement by default because HTML elements are not the only things that can be event targets. 
const keyupTargetBaseURI$ = keyup$.pipe(map<KeyboardEvent, string>(event => (event?.target as HTMLButtonElement).baseURI));

// Operador Pluck. Deprecado. Usar map
// const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI')); derecado

keyupCode$.subscribe(code => console.log('map ', code));
keyupTargetBaseURI$.subscribe(baseURI => console.log('map ', baseURI));

// mapTo. Deprecado. Usar map
// const keyupMapTo$ = keyup$.pipe(mapTo('target'));
const keyupMapTo$ = keyup$.pipe(map(() => 'target')); // Usar map


