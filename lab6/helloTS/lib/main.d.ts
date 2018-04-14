interface Person {
    name: string;
}
declare class Student {
    name: string;
    yob: number;
    constructor(name: string, yob: number);
}
declare function sayHello(person: Person): void;
declare let zenek: Student;
declare let ziutek: {
    name: string;
    yob: number;
};
