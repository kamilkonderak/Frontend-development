console.log("Hello World!")

interface Person{
    name: string;
    yob: number;
    //married: boolean;
    pesel?: number

}

let myList: number[]


class Student{
    constructor(public name: string, public yob: number)
    {
        this.name = name;
        this.yob=yob;
    }
}

function sayHello(person: Person) {
    console.log("Hello "+ person.name)

}

let zenek = new Student('Zenon', 2004)
console.log(zenek.name)

let ziutek = {name: 'Ziutek', yob: 1967}

let myList2: Person[] = [ziutek, zenek];
let myTuple: [string, number] = ["flat", 1553];
console.log(myTuple[0])

sayHello(ziutek)
sayHello(zenek)

enum Color {Red, Green, Blue}
console.log(Color.Red)

let something: any =5
something="hello"
something = false

let someone = new Student("Henio", 2005)
someone.name