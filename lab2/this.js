//this
// Konteksty dzialania funkcji THIS
//1) jako funkcja (zwykły kontekst)

function z() {
    console.log(this.imie);
}
imie = 'lul';
z();

//2) Kontenst konstruktora
// Konstruktory wielka litera
function Person(name) {
    this.name=name;
}

var ziutek = new Person('Ziutek');  //z 'new' zadziala, odwoluje sie do skonstruowanej przestrzeni
var heniek = new Person('Heniek');  //bez 'new' nie zadziala, odwoluje sie do Global

console.log(ziutek.name); 
console.log(heniek.name);

//3) Metoda
//odwoluje sie do metody, ktorej jest czescia
var person = {
    imie: "Nieznane",
    sayHello: function() {
        return "Hello " + this.imie;
    }
};

console.log(person.sayHello());

//4) Apply
//
function sayKwaKwa() {
    return console.log("Jestem kaczką, bo mowię: " + this.kwakwa);
}

var kaczka = {
    kwakwa: "KWA, KWA"
};

var pies = {
    hauhau: "Hau, Hau"
};

sayKwaKwa.apply(kaczka);
sayKwaKwa.apply(pies);

