var obj = {
    'imie': "Jan",
    nazwisko: "Kowalski",
    rokUr: 1893
    
};

console.log(obj.imie);
console.log(obj.rokUr);

obj.miasto = "Gdańsk";
console.log(obj['miasto']);

var somearray = [1,2, "trzy"];
somearray.push(5);
somearray.miasto = "Gdańsk";

console.log(typeof somearray);
console.log(somearray.length);
console.log(typeof new Array());
console.log(somearray.miasto);


var add = function (a,b) {
return a+b;
}

console.log(add(2,3));
console.log(add(2,3,6));
console.log(add());

console.log(typeof NaN);

//hoisting - wynoszenie funkcji na gore przez interpreter
function multiply (a){
    return a*a;
}

console.log(multiply(2,3));

var higherOrderFunction = function (a,b){
    return a(b) + b;
}

console.log(higherOrderFunction(multiply,4));

var someFun = function() {
    
    return function()
    {
        
    };
};

//ukrywanie implementacji, domknięcie
var counter = function() {
    var i =0;
    return function() {
        return ++i;
    };
};

var counter2 = function() {
    var i =0;
    return function() {
        return ++i;
    };
}();
//immediately executed function  //iEF

//Global Scope
var counter3 = function() {
    i =0; // <-- global
    return function() {
        return ++i;
    };
}();

var c = counter();
console.log(typeof c);

c();
c();
c();

var d = counter2();
d();
d();

console.log(c());
console.log(d());