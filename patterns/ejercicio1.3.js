class Banco {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = [];
        this.clientes = [];
        this.subscriptores = [];
        this.cuentaBase=null;
    }
    
    CrearCuenta(cliente) {
        const nuevaCuenta = this.GenerarCuenta(cliente);
        this.AnadirCuenta(nuevaCuenta);
        this.AnadirCliente(cliente);
        cliente.AnadirCuenta(nuevaCuenta);
        return nuevaCuenta;
    }
    CrearCliente(nombreCliente) {
        const nuevoCliente = new Cliente(nombreCliente);
        this.AnadirCliente(nuevoCliente);
        return nuevoCliente;
    }
    
    AnadirCliente(cliente) {
        if (this.clientes.indexOf(cliente) === -1) {
            this.clientes.push(cliente);
        }

    }
    AnadirCuenta(cuenta) {
        if (this.cuentas.indexOf(cuenta) === -1) {
            this.cuentas.push(cuenta);
        }
    }
    EstablecerCondiciones(cuentaBase){
        this.cuentaBase= cuentaBase;
    }
    GenerarCuenta(cliente){
        const nuevaCuenta = new Cuenta(cliente,this);
        if(this.cuentaBase){
            nuevaCuenta.Comision= this.cuentaBase.Comision;
        }
        return nuevaCuenta;
    }
    Subscribe(cliente) {
        if (this.subscriptores.indexOf(cliente) === -1) {
         this.subscriptores.push(cliente);
        }
    }
 
    Unsubscribe(cliente) {
        this.subscriptores = this.subscriptores.filter(
            function(item) {
                if (item !== cliente) {
                    return item;
                }
            }
        );
    }
 
    LanzarCampanaComunicacion(textoCampana) {
        var scope = this;
        this.subscriptores.forEach(function(cliente) {
            cliente.LeerComunicacion(scope, textoCampana);
        });
    }
}

class Cuenta {
    constructor( cliente, banco) {
        this.cliente = cliente;
        this.banco = banco;
        this.saldo = 0;
        this._comision=0;
    }
    get Comision(){
        return this._comision;
    }
    set Comision(nuevaComision){
        this._comision=nuevaComision;
    }
    
}
class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = [];
    }
    AnadirCuenta(cuenta) {
        if (this.cuentas.indexOf(cuenta) === -1) {
            this.cuentas.push(cuenta);
        }
    }
    LeerComunicacion(scope, textoCampana){
        console.log("Cliente "+this.nombre+" recibe correo de "+scope.nombre+" con texto:"+textoCampana);
    }
}


const banco = new Banco("BBVA");
const cliente1= banco.CrearCliente("Marcos");
const cliente2= banco.CrearCliente("Javier");
const cuenta1 = banco.CrearCuenta(cliente1);

const cuentaFicticia = new Cuenta(null,banco);
cuentaFicticia.Comision= 1;
banco.EstablecerCondiciones(cuentaFicticia);
const cuenta2 = banco.CrearCuenta(cliente1);
const cuentaFicticia2 = new Cuenta(null,banco);
cuentaFicticia2.Comision= 2;
banco.EstablecerCondiciones(cuentaFicticia2);

const cuenta3 = banco.CrearCuenta(cliente2);

banco.Subscribe(cliente1);
banco.Subscribe(cliente2);
banco.LanzarCampanaComunicacion("Campaña 2019A");
banco.Unsubscribe(cliente2);
banco.LanzarCampanaComunicacion("Campaña 2019B");

