class Target {
    create(){

    }
    Request(){}
}



class Adaptee {

    create() {
        console.log('Adaptee created')
    }
    SpecificRequest(){
        console.log('Adaptee request')
    }
}

class  Adapter {
    constructor(clase){
        this.clase=clase;
    }
    create() {
        console.log('Adapter created')
    }
    Request(){
        this.clase.SpecificRequest();
    }
}
var  a = new Adaptee();
a.SpecificRequest();
    var f = new Adapter(a);
    f.Request();
