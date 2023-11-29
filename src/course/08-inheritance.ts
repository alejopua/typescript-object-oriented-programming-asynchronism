// inheritance - abstraer comportamientos

class Animal {
    constructor (public name: string){}

    gretings(){
        return `Hello ${this.name}`
    }
}
const animal1 = new Animal('Tiger')
console.log(animal1.gretings());

class Dog extends Animal {
    constructor(
        name: string,
        public owner: string
    ){
        super(name)
    }

    woof(bark: number): void {
        for (let index = 0; index < bark; index++) {
            console.log('woof!')
        }
    }
}

const pet1 = new Dog('Perrito', 'Lleritos')
console.log(pet1.gretings());
pet1.woof(2);
console.log('This is the owner called: ', pet1.owner);