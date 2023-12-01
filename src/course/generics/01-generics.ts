//Introducción a los genéricos - aprendiendo la sintaxis

import { Dog } from './../09-protected';
const getValue = <T>(value: T): T => {
    return value;
}

console.log(getValue<number>(100).toFixed(2));
console.log(getValue('hola world').toUpperCase());

const fifi = new Dog('Fifi', 'Poodle');
console.log(getValue<Dog>(fifi).greetings());