let userName: string = "Nithin";
let age: number = 20;
let isStudent: boolean = true;

console.log(userName);
console.log(age);
console.log(isStudent);


let numbers: number[] = [10, 20, 30, 40, 50];
let fruits: string[] = ["Apple", "Mango", "Orange"];

console.log(numbers);
console.log(fruits);


function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return a / b;
}

console.log(add(10, 20));
console.log(subtract(20, 10));
console.log(multiply(10, 5));
console.log(divide(20, 5));


function greet(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Hello ${name}, you are ${age} years old`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greet("Nithin");
greet("Nithin", 20);


let student: {
    name: string;
    age: number;
    cgpa: number;
} = {
    name: "Nithin",
    age: 20,
    cgpa: 8.5
};

console.log(student.name);
console.log(student.cgpa);


type Student = {
    name: string;
    age: number;
    cgpa: number;
};

let student1: Student = {
    name: "Nithin",
    age: 20,
    cgpa: 8.5
};

let student2: Student = {
    name: "Rahul",
    age: 21,
    cgpa: 9.1
};

console.log(student1);
console.log(student2);


interface User {
    id: number;
    name: string;
    email: string;
}

let user: User = {
    id: 1,
    name: "Nithin",
    email: "nithin@gmail.com"
};

console.log(user);


