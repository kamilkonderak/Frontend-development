console.log("Hello World!")

interface Person{
    name: string;

}

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

sayHello(ziutek)
sayHello(zenek)