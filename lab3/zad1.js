function Service(price, amount) {
    this.price = price;
    this.amount = amount;
}

Service.prototype = {
    getPrice: function() {
        return this.price;
    },
    getAmount: function() {
        return this.amount;
    }
}


function Compute(price, amount, cpu, ram) {
    Service.call(this, price, amount)
    this.cpu = cpu;
    this.ram = ram;
}

Compute.prototype = Object.create(Service.prototype);
Compute.prototype.constructor = Compute;
Compute.prototype.totalPrice = function () {
    return this.price * this.amount;
}

var A = new Compute(10, 3, 4, 8);
console.log(A.getAmount());
console.log(A.getPrice());
console.log(A.totalPrice());
