class SingletonBanco {
    constructor(nombre) {
        this._nombre = nombre;
        this.instancia = null;
    }
    crearBanco() {
        this.instancia = new Banco(this._nombre);

    }
    get banco() {
        if (this.instancia == null) {
            this.crearBanco();
        }
        return this.instancia;
    }
}
class Banco {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = [];
        this.clientes = [];
        this.suscriptores = [];
        this.idCuentas = 0;
        this.idCliente = 0;
        this.protoCuenta = null;
    }
    crearCliente(nombreCliente) {
        const nuevoCliente = new Cliente(this.nuevoIdCliente, nombreCliente);
        this.anadirCliente(nuevoCliente);
        return nuevoCliente;
    }
    anadirCliente(cliente) {
        if (this.clientes.indexOf(cliente) === -1) {
            this.clientes.push(cliente);
        }
    }
    crearCuenta(cliente, saldo) {
        //const nuevaCuenta = new Cuenta(this.nuevoIdCuenta, cliente, this, saldo);
        const nuevaCuenta = this.crearCuentaApartirProto();
        nuevaCuenta.id = this.nuevoIdCuenta;
        nuevaCuenta.cliente = cliente;
        nuevaCuenta.saldo = saldo;

        this.anadirCliente(cliente); //Defensivo
        this.anadirCuenta(nuevaCuenta);
        cliente.anadirCuenta(nuevaCuenta);
        return nuevaCuenta;

    }
    crearCuentaApartirProto() {
        if (this.protoCuenta == null) {
            this.cambiarComision(0);
        }
        const nuevaCuenta = new Cuenta();
        nuevaCuenta.id = this.protoCuenta.id;
        nuevaCuenta.cliente = this.protoCuenta.cliente;
        nuevaCuenta.banco = this.protoCuenta.banco;
        nuevaCuenta.saldo = this.protoCuenta.saldo;
        nuevaCuenta.comision = this.protoCuenta.comision;
        return nuevaCuenta;
    }
    anadirCuenta(cuenta) {
        if (this.cuentas.indexOf(cuenta) === -1) {
            this.cuentas.push(cuenta);
        }
    }
    get nuevoIdCuenta() {
        return ++this.idCuentas;
    }
    get nuevoIdCliente() {
        return ++this.idCliente;
    }

    cambiarComision(nuevaComision) {
        const cuentaProto = new Cuenta(null, null, this, 0);
        cuentaProto.comision = nuevaComision;
        this.protoCuenta = cuentaProto;

    }

    subscribir(cliente) {
       // if (this.suscriptores.indexOf(cliente) === -1) {
            this.suscriptores.push(cliente);
      // }
    }
    desubscribir(cliente) {
        this.suscriptores = this.suscriptores.filter(
            function (item) {
                if (item !== cliente) {
                    return item;
                }
            }
        )
    }
    enviarPublicidad(textoPublicitario) {
        const scope = this;
        this.suscriptores.forEach(cliente => {
            cliente.leerPublicidad(scope, textoPublicitario);
        });

    }
}

class Cliente {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.cuentas = [];
    }
    anadirCuenta(cuenta) {
        if (this.cuentas.indexOf(cuenta) === -1) {
            this.cuentas.push(cuenta);
        }
    }

    leerPublicidad(scope, textoPublicitario) {
        console.log("El cliente " + this.nombre + "(" + this.id +
            ") recibe la publicidad del banco " + scope.nombre +
            " con texto: " + textoPublicitario);
    }
}

class Cuenta {
    constructor(id, cliente, banco, saldo) {
        this.id = id;
        this.cliente = cliente;
        this.banco = banco;
        this.saldo = saldo;
        this._comision = 0;
    }
    get comision() {
        return this._comision;
    }
    set comision(value) {
        this._comision = value;
    }

}

const generadoBanco = new SingletonBanco("001");

const bancoS1 = generadoBanco.banco;

//const banco1 = new Banco("001");
const bancoS2 = generadoBanco.banco;


const clienteMarcos = bancoS1.crearCliente("Marcos");

const saldoInicialCuenta1Marcos = 30;
const cuenta1Marcos = bancoS1.crearCuenta(clienteMarcos, saldoInicialCuenta1Marcos);
bancoS1.cambiarComision(0.03);
const cuenta2Marcos = bancoS1.crearCuenta(clienteMarcos, 60.5);

const clienteIria = bancoS1.crearCliente("Iria");
const cuenta1Iria = bancoS1.crearCuenta(clienteIria, 211.99);


bancoS1.subscribir(clienteMarcos);
bancoS1.subscribir(clienteIria);
bancoS1.enviarPublicidad("nuevas comisiones!!");
// Marcos ha leido nuevas comisiones!!
// Iria ha leido nuevas comisiones!!

bancoS1.desubscribir(clienteIria);
bancoS1.enviarPublicidad("nuevas comisiones en Marzo!!");
bancoS1.subscribir(clienteIria);
bancoS1.subscribir(clienteIria);
bancoS1.subscribir(clienteIria);
bancoS1.subscribir(clienteIria);
bancoS1.subscribir(clienteIria);
bancoS1.enviarPublicidad("nuevas comisiones en Abril!!");





