"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("Hello World!");

var Student = function Student(name, yob) {
  _classCallCheck(this, Student);

  this.name = name;
  this.yob = yob;
};

function sayHello(person) {
  console.log("Hello " + person.name);
}

var zenek = new Student('Zenon', 2004);
console.log(zenek.name);
var ziutek = {
  name: 'Ziutek',
  yob: 1967
};
sayHello(ziutek);
sayHello(zenek);