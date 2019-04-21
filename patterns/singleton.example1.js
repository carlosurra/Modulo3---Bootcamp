
class Singleton2 {
    constructor() {
        this.instance =  createInstance();
    }
    createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
    getInstance() {
        if (!this.instance) {
            this.instance = createInstance();
        }
        return this.instance;
    }

}


var generador = new Singleton2();
var instance1 = generador.getInstance();
var instance2 = generador.getInstance();

var object2 = new Object("I am the instance");
var object1 = new Object("I am the instance");
console.log("Same instance? " + (instance1 === instance2));  
console.log("Same instance? " + (object1 === object2));  
