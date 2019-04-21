En este apartado se realizará el diseño e implementación de una
pequeña base de datos que guarde información de pacientes que ingresan en
un hospital. En este hospital, los pacientes que llegan al servicio de
urgencias del hospital son examinados y, dependiendo de su estado de salud,
son ingresados en la planta correspondiente (traumatología, cuidados
intensivos, ...) bajo la supervisión de un médico responsable.
Para este ejemplo se llevarán a cabo las tres etapas 



• Entidad Pacientes:
Número de Seguridad Social.
Nombre del paciente.
Apellidos del paciente.
Domicilio.
Población.
Provincia
Código postal.
Número de teléfono.
Número de historial clínico.
Observaciones
• Entidad Ingresos:
Procedencia.
Fecha de ingreso.
Número de planta.
Número de cama.
Observaciones
• Entidad Médicos:
Código de identificación del médico.
Nombre.
Apellidos.
Especialidad.
Número de colegiado.
Cargo.
Observaciones 
---------------------------------
Un veterinario tiene como paciente
animales como cliente familias, un cliente es un conjunto de persona
que suele corresponderse con una familia.

Cada cliente tiene un
código primer apellido es la cabeza de la familia un # de cuenta
bancaria, una dirección, un teléfono y los nombre, la
identificación de la personas correspondiente no existe el limite de
personas asociadas a un cliente además, una persona puede estar dado
de alta en varios clientes ( Ejemplo: Un hombre que vive con su
esposa tiene un gato y como tal pertenece a un cliente, pero también
esta dado de alta en el cliente asociado con el perro de sus
padres.) Los cliente pueden tener varias mascotas, cada mascota tiene
un código, un alias, una especies, una raza, color de pelo, fecha de
nacimiento, peso del paciente ( se debe llevar el historial de peso
durante las 10 ultimas visitas y el peso actual. ) Así mismo se
guarda un historial médico con cada enfermedad que tuvo y la fecha
en la que se enfermo y adicional mente cada mascota tiene un
calendario de vacunación, en la que se llama el registro de cada
vacuna, y la enfermedad de la que se esta vacunado.


Cliente
	IdCliente
	Nombre
	dni
	Cuentabancaria
	Direccion

Cliente-Miembro
	idCliente
	idMiembro
	Fecha alta
	fecha baja

Miembro
	IdMiembro
	Nombre/Apellidos
	Telefono
	email

Cliente-Paciente
	idCliente
	idPaciente
	fecha-baja

Paciente (Mascota)
	IdPaciente
	Chip
	Nombre (Alias)
	Raza
	Especie
	Fecha nacimiento (not nullable)
	Fecha fallecimiento (nullable)
	Color pelo
Historia de pesos
	IdPaciente
	Fecha
	Peso
	
Calendario de vacunas

Razas

Especie

Direcciones

Ingresos
	idIngreso
	Fecha
	IdPaciente
	IdMiembro
	MotivoConsulta
	idTipoConsulta
	
TiposConsulta
	idTipoConsulta
	Nombre (Vacunacion, Consulta, Revision, Castracion)

Historia enfermedades
	IdHistoriaEnfermedad
	IdPaciente
	FechaDeteccion
	FechaAlta
	Diagnostico
	Pronosctico
	Tratamiento
	IdTipoEnfermedad
	
Enfermedades
	idTipoEnfermedad
	Descripcion

Vacunacion
	idVacunacion
	idVacuna
	fecha
	idPaciente
	idCalendario
	dosis
	Notas 
	
	
Vacunas
	idVacuna
	idEspecie
	Nombre
	DosisBasica
	
CalendarioVacunas
	idCalendario
	idVacuna
	edad (meses)
	Dosis
	