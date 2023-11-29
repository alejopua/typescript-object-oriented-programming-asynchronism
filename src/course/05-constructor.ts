// public is default in typescript. with public or without public is the same

export class myDate {
    constructor(
        public year: number = 1994, 
        public month: number = 11, 
        private day: number = 14
    ){}

    format(): string {
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)
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
            if (this.month >= 12) {
                this.year += amount;
                this.month = 1;
            } else {
                this.month += amount;
            }
        } else if (type === 'day') {
            this.day += amount;
        }
    }

    getDay(){
        return this.day;
    }
}

const firstDate = new myDate(2023, 12, 9);
console.log('First date : ', {firstDate});
console.log('First date format: ', firstDate.format);

firstDate.add(1, 'year');
console.log('First date add year: ', firstDate.format());

firstDate.add(1, 'month');
console.log('First date add month: ', firstDate.format());

firstDate.add(1, 'day');
console.log('First date add day: ', firstDate.format());

console.log('date getDay: ', firstDate.getDay());