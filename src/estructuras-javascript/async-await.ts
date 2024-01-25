export { };
//export function prueba() {

async function request() {
    const response = await fetch("/robots.txt");
    const data = await response.text();
    return data;
}

await request();
//}



/*************************************** */
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a: number, b: number) => a + b;

ratings.forEach(async (rating) => {
    sum = await sumFunction(sum, rating);
});

console.log(sum);