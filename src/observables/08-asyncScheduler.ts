import { asyncScheduler } from 'rxjs';



const saludar = () => console.log('Hola mundo');
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);
// const saludar3 = (nombre) => console.log(`Hola ${nombre.nombre} ${nombre.apellido}`);


asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, 'pepe');
// asyncScheduler.schedule(saludar3, 2000, { nombre: 'pepe', apellido: 'soler' });

const subs = asyncScheduler.schedule(function (state) {

    console.log('state: ', state);
    this.schedule(state + 1, 1000);

}, 3000, 1);


/*setTimeout(() => {
    subs.unsubscribe();
}, 6000);  Lo suyo es usar éste para desuscribirse */


asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
