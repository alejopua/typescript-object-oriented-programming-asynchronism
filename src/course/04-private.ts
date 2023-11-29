// public is default in typescript. with public or without public is the same

export class myDate {
    public year: number;
    public month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

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
}

const firstDate = new myDate(2023, 12, 9);
console.log('First date : ', {firstDate});
console.log('First date format: ', firstDate.format());

firstDate.add(1, 'year');
console.log('First date add year: ', firstDate.format());

firstDate.add(1, 'month');
console.log('First date add month: ', firstDate.format());

firstDate.add(1, 'day');
console.log('First date add day: ', firstDate.format());