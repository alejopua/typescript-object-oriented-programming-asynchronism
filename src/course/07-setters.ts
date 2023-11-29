
// public is default in typescript. with public or without public is the same
// 06-> getter - una forma de acceder a los atributos

export class myDate {
    constructor(
        public year: number = 1994, 
        private _month: number = 11, 
        private _day: number = 14
    ){}

    format(): string {
        const day = this.addPadding(this._day)
        const month = this.addPadding(this._month)
        return `${this.year}/${month}/${day}`
    }

    private addPadding (value: number) {
        if (value < 10) {
            return `0${value}`
        } else {
            return `${value}`
        }
    }

    add(amount: number, type: 'year' | 'month' | 'day') {
        if(type === 'year') {
            this.year += amount;
        } else if (type === 'month') {
            if (this._month >= 12) {
                this.year += amount;
                this._month = 1;
            } else {
                this._month += amount;
            }
        } else if (type === 'day') {
            this._day += amount;
        }
    }

    get day(){
        return this._day;
    }

    set day(newValue: number){
        if (newValue >= 1 && newValue <= 30) {
            this._day = newValue;
        } else {
            throw new Error ('Invalid date, number out of range.');
        }
        
    }
}

const firstDate = new myDate(2023, 12, 9);
console.log('First date : ', {firstDate});
console.log('First date format: ', firstDate.format());
console.log('date getDay: ', firstDate.day);
console.log(firstDate.day = 40)