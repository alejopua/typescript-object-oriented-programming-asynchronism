// singleton - constructor is private, only one instance of the class

export class MyService {
    static instance: MyService | null = null;
    private constructor(private name: string){}

    getName(){
        return this.name;
    }

    static create(name: string){
        if (MyService.instance === null) {
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}

const service1 = MyService.create('service 1');
console.log(service1?.getName()); // Use optional chaining operator to handle possible null value

const service2 = MyService.create('service 2');
console.log(service2?.getName());

console.log(service1 === service2);