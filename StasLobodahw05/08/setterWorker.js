class Worker
{
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getRate() {
        return this.rate;
    }

    getDays() {
        return this.days;
    }

    getSalary() {
        return this.rate * this.days;
    }

    setRate(num){
       return this.rate = num;
    }

    setDays(num){
        return this.days = num;
    }
}
let worker = new Worker('Stas', 'Loboda', 10, 31);

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());
worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary());