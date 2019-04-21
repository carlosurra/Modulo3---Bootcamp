# Creación de una base de datos
## Objetivo

Creación de un modelo simulado de un banco
Se crearan las siguientes tablas:
* Cliente
    * Nombre
    * Direccion
    * Fecha de alta cliente
* Banco
    * Nombre
    * Direccion
    * Presidente
* Oficina
    * Codigo
    * Nombre
    * Direccion

* Empleado
    * Nombre
    * Fecha de incorporación
    * Oficina asignacion
    * Salario actual mensual
    * 
* Empleado-OFicina
    * Empleado
    * Oficina
    
* Direccion
    * Calle
    * Numero
    * Piso
    * Codigo Postal
    * Municipio
* Municipio
    * Nombre
    * Provicia
* Provincia
    * Nombre
    * Pais
* Pais (Opcional)
    * Nombre
* Cuenta bancaria
    * Cliente
    * Oficina
    * Saldo
    * Fecha de saldo
    * Tipo de cuenta
* Listado de transacciones
    * Cuenta de origen
    * Cuenta de destino
    * Importe
    * Nombre destinatario
    * Notas
    * Fecha de transacción
* Agenda del comercial
    * Cliente
    * Notas
    * Ultimo contacto
* Comisiones actuales del banco \[Opcional en forma de histórico]
    * Tipo de cuenta
    * Valor de comisión
    * \[Opcional] Tipo de comision (Mantenimiento, Transferencia, Descubierto)
    
Se crearán las siguientes vistas:
* Dirección completa
* Cuentas con saldo negativo
* Cambios en las cuentas durante el día....(sumar todas las transacciones del día actual y dar el saldo por cuenta y la diferencia de las transacciones del día)
* Posiciones de un cliente: Cliente, numero de cuentas, saldo establecido.

Todo las tablas tienen que tener los campos de auditoria: 
* usuario y fecha de creacion (la fecha automática)
* usuario y fecha de actualización (la fecha se actualiza automaticamente)
\[Opcional]
* Comunicados comerciales enviados
* Campaña de marketing
* Idioma de los comunicados
* Condiciones especiales individuales
* Histórico de cobros del comercial
* Procedimiento para consolidar las transacciones del día y actualizar el saldo de cada cuenta 