let id: number | string;

id = 101;
console.log(id);

id = "USER101";
console.log(id);


function printId(id: number | string): void {
    console.log(id);
}

printId(100);
printId("ABC100");


let statusOfPage: "success" | "error" | "loading";

statusOfPage = "success";

console.log(status);


enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}

let role: Role = Role.ADMIN;

console.log(role);


interface StudentDetails {
    id: number;
    name: string;
    marks: number;
}

const students: StudentDetails[] = [
    {
        id: 1,
        name: "Nithin",
        marks: 85
    },
    {
        id: 2,
        name: "Rahul",
        marks: 72
    },
    {
        id: 3,
        name: "Arun",
        marks: 91
    }
];

console.log(students);


const squares: number[] = numbers.map((num: number): number => {
    return num * num;
});

console.log(squares);


const evenNumbers: number[] = numbers.filter(
    (num: number): boolean => num % 2 === 0
);

console.log(evenNumbers);


const sum: number = numbers.reduce(
    (total: number, num: number): number => {
        return total + num;
    },
    0
);

console.log(sum);


interface UserOptional {
    id: number;
    name: string;
    email?: string;
}

const user1: UserOptional = {
    id: 1,
    name: "Nithin"
};

const user2: UserOptional = {
    id: 2,
    name: "Rahul",
    email: "rahul@gmail.com"
};

console.log(user1);
console.log(user2);


interface Person {
    name: string;
    age: number;
}

interface StudentPerson extends Person {
    rollNumber: number;
    course: string;
}

const studentPerson: StudentPerson = {
    name: "Nithin",
    age: 20,
    rollNumber: 101,
    course: "CSE"
};

console.log(studentPerson);


let operation: (a: number, b: number) => number;

operation = (a, b) => {
    return a + b;
};

console.log(operation(10, 20));


function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(100));
console.log(identity<string>("Hello"));
console.log(identity<boolean>(true));


function getFirst<T>(items: T[]): T {
    return items[0];
}

console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<string>(["Apple", "Mango", "Orange"]));


interface ApiResponse<T> {
    success: boolean;
    data: T;
}

interface ApiUser {
    id: number;
    name: string;
}

const response: ApiResponse<ApiUser> = {
    success: true,
    data: {
        id: 1,
        name: "Nithin"
    }
};

console.log(response);
console.log(response.data.name);