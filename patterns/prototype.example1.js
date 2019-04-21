class CustomerPrototype {
    constructor(proto) {
        this.proto = proto;
       
    } 
    clone () {
            var customer = new Customer();
            customer.first = this.proto.first;
            customer.last = this.proto.last;
            customer.status = this.proto.status;
            return customer;
        };
}
 
function Customer(first, last, status) {
 
    this.first = first;
    this.last = last;
    this.status = status;
 
    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
              ", status: " + this.status);
    };
}
 

 
    var proto = new Customer("Sin nombre", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);
 
    var customer = prototype.clone();
    customer.first="Marcos";
    customer.last="Martínez"
    customer.status="Comprando";
    customer.say();

    var customer2 = prototype.clone();
    customer2.first="Alberto";
    customer2.last="Ramos"
    customer2.status="Listo";
    customer2.say();