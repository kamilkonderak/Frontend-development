var lib = {}
lib.module = (function(){
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