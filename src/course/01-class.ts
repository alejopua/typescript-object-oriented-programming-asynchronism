class myDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const firstDate = new myDate(2023, 12, 29);
console.log('First date: ', {firstDate});