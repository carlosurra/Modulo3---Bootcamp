
-- 1a. Muestra el nombre y apellidos de todos los actores de la tabla "actor.

-- 1b. Muestra el nombre y apellido de cada actor en una sola columna en mayúsculas. Nombra a la columna "Actor Name"

-- 2a. Encuentra el número de ID, nombre y apellido de un actor, del cual solo sabes su nombre, "Joe".
--      Que consulta unica usarias para obtener esta información?


-- 2b. Encuentra todos los actores cuyo apellido contiene las letras GEN:

-- 2c. Encuentra todos los actores cuyos apellidos contengan las letras LI. Al mismo tiempo, ordena las celdas por apellido y nombre, en este orden:

-- 2d. Usando IN muestra las columnas "country_id" y "country" de los siguientes paises: Afghanistan, Bangladesh, and China:

-- 3a. Añade una columna llamada "middle_name" a la tabla "actor". Posiciónala entre "first_name" y "last_name". Pista: Tendrás que especificar el tipo de dato.

-- 3b. Te das cuenta de que algunos de los actores tienen apellidos tremendamente largos
--  Cambia el tipo de dato de la columna "middle_name" a "blobs"

-- 3c. Ahora borra la columna "middle_name"


-- 4a. Lista los apellidos de los actores, asi como cuantos actores tienen apellido.

-- 4b. Lista los apellidos de los actores y el número de actores quienes tienen apellido,
--     pero solo para aquellos nombres que son compartidos con al menos dos actores

-- 4d. Es posible que nos hayamos precipitado cambiando GROUCHO a HARPO. Resulta que GROUHCO era el nombre
-- correcto después de todo! 
-- En una sola consilta, si el primer nombre del actor es actualmente HARPO, 
-- cambialo por GROUCHO. Por otra parte, cambia el nombre a MUCHO GROUCHO, que es lo que seria exatamente
-- el actor con el gravísimo error. TEN CUIDADOD DE NO CAMBIAR EL NOMBRE DE TODOS LOS ACTORES
-- A MUCHO GROUCHO! 
-- (Pista: actualiza el dato usando un identificador único.)
 
-- 5a. No puedes localizar el esquema de la tabla "addreess". Que consulta usarias para recrearla?

-- 6a. Usa JOIN para mostrar los nombres y apellidos, así como las direcciones, de todos los miembros de staff. Usa las tablas "staff" y "address":

-- 6b. Usa JOIN para mostrar la cantidad total ganada por cada miembro del staff en Agosto de 2015. Usa las tablas "staff" y "payment".

-- 6c. Lista cada película y el número de actores que estan apuntados para esa película. Usa las tablas "film_actor" y "film". Usa inner join.

-- 6d. Cuantas copias de la película Hunchback Impossible existen en el sistema de inventario?

-- 6e. Usanto las tablas "payment" y "customer" y el comando JOIN, lista el total pagado por cada cliente. 
--     Lista los clientes alfabéticamente por apellido.

-- 7a. La musica de Queen y Kris Kristofferson han obtenido un resurgimiento inesperado. Como consecuencia inesperada,
--  las películas comenzando por las letras K y Q se han disparado en popularidad. Usa subconsultas para mostrar los títulos
--  de las películas que comienzan por las letras K y Q cuyo idioma es "English".

-- 7b. Usa subconsultas para mostrar todos los actores que aparezcan en la película Alone Trip.

-- 7c. Quieres lanzar una campaña de marketing por e-mail en Canadá, para lo cual necesitarás saber los nombres y
--     las direcciones de e-mail de todos los clientes canadienses.
--     Usa joins para obtener esta información

-- 7d. Las ventas han bajado en las familias jóvenes, y quieres marcar como objetivo todas las peliculas familiares para una promoción.
--  Identifica todas las películas categorizadas como "family films".

-- 7e. Muestra las más frecuentemente alquiladas peliculas en orden descendiente

-- 7f. Escribe una consulta para mostrar cuanto negocio, en dolares, ha traído cada tienda

-- 7g. Escribe una consulta para mostrar, por cada tienda, su ID, ciudad y país

-- 7h. Lista los 5 generos mas rentables en orden descendiente 
-- (Pista: puede que necesites usar las siguientes tablas: "category, film_category, inventory, payment, and rental".)

-- 8a. En tu nuevo rol como ejecutivo, te gustaría tener una forma más fácil de ver 
--     los 5 géneros más rentables. Usa la solución del problema anterior para crear una vista. 
--     Si aun no has resuelto el 7º, puedes sustituirlo por cualquier otra consulta para crear una vista

-- 8b. Como mostrarías la vista que has creado en el 8a?

-- 8c. Encuentras que no necesitas la vista de los 5 generos. Escribe una consulta para borrarla.
