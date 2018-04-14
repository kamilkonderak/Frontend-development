"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("Hello World!");
var myList;

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
var myList2 = [ziutek, zenek];
var myTuple = ["flat", 1553];
console.log(myTuple[0]);
sayHello(ziutek);
sayHello(zenek);
var Color;

(function (Color) {
  Color[Color["Red"] = 0] = "Red";
  Color[Color["Green"] = 1] = "Green";
  Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

console.log(Color.Red);
var something = 5;
something = "hello";
something = false;
var someone = new Student("Henio", 2005);
someone.name;