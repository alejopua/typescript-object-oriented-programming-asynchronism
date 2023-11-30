// acceso protegido - heredando propiedades

export class Animal {
    constructor (protected name: string){}

    move(){
        return console.log('moving as an animal.')
    }
    
    greetings(){
        return `Hello ${this.name}`
    }

    protected attack(){
        return console.log(`catablas from ${this.name}`);
    }
}
const animal1 = new Animal('Tiger')
console.log(animal1.greetings());

class Dog extends Animal {
    constructor(
        name: string,
        public owner: string
    ){
        super(name)
    }

    woof(bark: number): void {
        for (let index = 0; index < bark; index++) {
            console.log(`woof! ${this.name}`)
        }

        super.move();
        this.attack();
    }
}

const pet1 = new Dog('Perrilais', 'Lleritos');
pet1.name = 'firulais';
console.log(pet1.greetings());
pet1.woof(2);
console.log('This is the owner called: ', pet1.owner);