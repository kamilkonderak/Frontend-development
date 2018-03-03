var lib = {}
lib.module = (function(){

    var myInterface = "fafaf";
    var priv1 = 0;
    var priv2 = "Hello";
    var c = 0;
    return  {
        message: priv2 + " World",
        counter: function() {
            return ++c;
        },
        sayHello: function(name){
            return "Hello " + name;
        }
    };
})();

console.log(lib.module.sayHello("lul"));
console.log(lib.module.counter());
console.log(lib.module.message);