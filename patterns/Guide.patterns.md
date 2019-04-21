### Patrones de diseño
#### Factory Design Pattern
DEfine una interfaz para crear un objeto, pero posibilita la elección de la clase que se quiere instanciar.

La 'factoría' crea nuevos objetos segun las especificaciones del cliente. 

Los objetos que participan son : El creador, el objeto abstracto y el objecto concreto.

#### Prototype Design Pattern
El patrón Prototipo crea nuevos objecto inicializados con valores copiados de un 'prototipo'.

Un ejemplo del patrón es la inicializacon de objetos con valores por defecto en base de datos. El objeto prototipo contiene los valores por defecto que se copiarań a los nuevos objetos.

Los objetos que participan son : El cliente, el prototipo y los clones.

#### Singleton
Asegura que una clase solo tiene una única instancia y provee un punto de acceso global al objeto.

El patrón limita el numero de instancias de un objeto particular a uno solo. Se clase se denomina Singleton.

Los objetos que participan son : Singleton 
#### Observer Design Pattern
Define una dependencia uno-a-muchos entre objetos que cuando un objeto cambia de estado, todos los objetos dependientes son notificados y actualizados automáticamente.

El Observador ofrece un modelo de subscripción en el cual los objetos se susvriben aun evento y son notificados cuando el evento ocurre.

Los objetos que participan son : Sujeto y los Observadores

Otros

https://www.dofactory.com/javascript/design-patterns

http://loredanacirstea.github.io/js-design-patterns/