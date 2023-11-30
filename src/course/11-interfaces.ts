export interface driver {
    database: string;
    username: string;
    password: string;
    host: string;

    connect(): void;
}


class MySQL implements driver {
    constructor(public database: string, public username: string, public password: string, public host: string){}
    connect(): void {
        console.log('Conectando a MySQL...')
    }
}

const dataBase1 = new MySQL('parrilla', 'pablo', '1234', 'localhost');
console.log(dataBase1);
dataBase1.connect();