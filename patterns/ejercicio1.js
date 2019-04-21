class Banco {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = [];
        this.clientes = [];
        this.subscriptores = [];
    }
    CrearCuenta(cliente) {
        const nuevaCuenta = new Cuenta(cliente, this);
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
}

class Cuenta {
    constructor(cliente, banco) {
        this.cliente = cliente;
        this.banco = banco;
        this.saldo = 0;
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
}


const banco = new Banco("BBVA");
const cliente1 = banco.CrearCliente("Marcos");
const cliente2 = banco.CrearCliente("Javier");
const cuenta1 = banco.CrearCuenta(cliente1);
const cuenta2 = banco.CrearCuenta(cliente1);
const cuenta3 = banco.CrearCuenta(cliente2);
