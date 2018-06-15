var ComputingServices = {}
ComputingServices.module = (function(){

    var name;
    var cost;
    var availability;
    var version = [1,2,3,4,5,6];
    var priv2 = 'hehe';


    return  {
        message: priv2 + " World",
        counter: function() {
            return ++c;
        },
        sayHello: function(){
            return "Hello " + this.name;
        },
        addCost: function(a,b){
            var x = a+b;
            return x;
        },
        setName: function(n){
            this.name = n;
        }


    };
})();

function Service(name, price, amount) {
    this.name=name;
    this.price=price;
    this.amount=amount;
}

var VM = new Service('VM', 2, 32);

console.log("Name: " + VM.name + " Price:" + VM.price + " Amount:" + VM.amount);
console.log();
console.log(ComputingServices.module.setName('nana'));
console.log(ComputingServices.module.name)
console.log(ComputingServices.module.sayHello());
console.log(ComputingServices.module.addCost(2+2));