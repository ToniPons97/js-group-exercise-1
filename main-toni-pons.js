import { clear, getRandomNr } from "./utils.js";
clear();


class Person {
    name;

    constructor(name = 'Default person') {
        this.name = name;
    }
}

class Student extends Person {
    year;
    onEnroll;
    grade;

    constructor(name, year = -1, onEnroll = () => {}, grade = -1) {
        super(name);
        this.year = year;
        this.onEnroll = onEnroll;
        this.grade = grade;
    }

    getNotified(success) {
        console.log(this.name);
        if (success === true)
            this.onEnroll();
    }
}

class Academy {
    name;
    students;

    constructor(name = 'Default', students = []) {
        this.name = name;
        this.students = students;
    }

    join(student) {
        this.students.push(student);
        student.getNotified(true);
    }

    static exam(currAcademy) {
        currAcademy.students.forEach(
            std => std.grade = Math.ceil(getRandomNr(1, 10)));
    }

    static graduate(currAcademy) {
        return currAcademy.students.filter(std => std.grade >= 6);
    }

    static studentLevels(currAcademy) {
        let levels = currAcademy.students.map(std => {
            if (std.grade === 5)
                return "Failed";
            else if (std.grade >= 6 && std.grade <= 7)
                return "Average";
            else if (std.grade >= 7 && std.grade <= 8)
                return "Above average";
            else if (std.grade >= 8 && std.grade <= 9)
                return "Great";
        });
        return levels;
    }

    static failedStudents(currAcademy) {
        return currAcademy.students.filter(std => std.grade <= 5);
    }
}

//Creating the academy
const happyToJoin = () => {console.log('I\'m happy to join!')};

let std1 = new Student('toni', 1, happyToJoin);
let std2 = new Student('John', 2, happyToJoin);
let std3 = new Student('Lennon', 3, happyToJoin);
let std4 = new Student('Paul', 4, happyToJoin);

let students = [
                std1, 
                std2, 
                std3, 
                std4
];

let academy = new Academy('Develhope');
students.forEach(std => academy.join(std));

Academy.exam(academy);
console.log('All students:');
console.log(academy.students);

let successful = Academy.graduate(academy);
let failed = Academy.failedStudents(academy);

console.log('Successful students:')
console.log(successful);

console.log('Failed students');
console.log(failed);

let jsonStudents = JSON.stringify(successful);
console.log('JSON Students:');
console.log(jsonStudents);