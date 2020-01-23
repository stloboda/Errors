 class Worker
 {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
let worker = new Worker('Stas', 'Loboda', 10, 31);
let worker2 = new Worker('Artem', 'Loboda', 10, 11);
let sum = worker.getSalary() + worker2.getSalary();
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
console.log(worker2.getSalary());
console.log(sum);

