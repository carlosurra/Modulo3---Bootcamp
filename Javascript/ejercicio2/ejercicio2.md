# Ejercicio 2
## Requisitos
* En un banco tienes cuentas comerciales y cuentas privadas.
* Se puede transferir dinero entre cuentas utilizando transacciones.
* Para cuentas privadas, la tarifa de transacción es de 0.01 € para las cuentas comerciales, la tarifa de transacción es de 0.02 €.
## Tareas
* Crear una clase de cuenta
    *  La clase debe tener una referencia al libro de transacciones.
    *  También debe tener un nombre para identificar la cuenta.
* Implementar una clase de Transacción
    * Una transacción consiste en un remitente opcional (Tipo: Cuenta)
    * receptor (Tipo: Cuenta)
    * cantidad (Tipo: Número)
    * referencia (Tipo: cadena)
* Implementar una clase de libro de transacciones que mantiene todas las transacciones.
    * Debe mantener una serie de transacciones
    * Tener una variable bankAccount que mantiene una referencia para la cuenta bancaria
    * Implementar una función addTransaction (transacción)
    * Implementar una función calculaAmountForAccount (cuenta) usando reducir
    * Implementar una función findTransactionsForAccount (cuenta) usando un filtro
* Añadir funciones de conveniencia a la cuenta
    * Añadir una función de envío que genere dos transacciones.
        * La transacción real
        * Una transacción por la comisión del banco.
        * añadir un get para calcular la cantidad
        * agregue un get para recuperar todas las transacciones relacionadas con la cuenta
* Crear una clase derivada de cuanta llamada BusinessAccount
    * Sobrescribir la tarifa de transsaccon para las cuentas de empresas