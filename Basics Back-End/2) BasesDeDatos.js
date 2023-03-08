/*
!BASES DE DATOS:SQL es la más demandada.
Es un conjunto de información almacenada y consultada sistemáticamente. Reglas definidas de cómo almacenar y consultar la información.

Ej: si la calificación de los estudiantes está organizada por año o nota entonces está sistematizada.

Sistema gestor de base de datos: es el software que gestiona la base de datos. La base de datos como tal es la información guardada. El sistema gestor es el software. Con esto creamos la estructura de la base de datos, consultarle, controlar el acceso a su información, etc.

?qué es una base de datos relacional?

Las bases de datos relacionales (SQL: structured query language) tiene una estructura definida con relaciones.Ej: tenes una lista de cursos y otra lista de estudiantes. Esas dos tablas se pueden relacionar respecto a qué curso hizo cada estudiante a través del "JOIN" buscando en dos tablas distintas. El tema es que hay tanta información que las bases de datos relacionales se quedan cortas. Así aparecen las bases de datos no relacionales.

SQL no solo permite consultar información sino escribirla.

SQL se divide en 3 lenguajes:
1) DDL (data definition language): define las estructuras, definir las tablas, los registros, y los campos,
2) DML (data manipulation language): con esto se hace el CRUD, el INSERT que es llenar de datos las tablas, el SELECT que es leer datos de las tablas, UPDATE que actualiza, y el DELETE que borra datos.
3) DCL: controla permisoss de accesos a las bases de datos.

Tienen relaciones. Entidades relacionadas entre ellas. No guardas datos de cursos en la lista de alumnos. Definis lugares solo para cursos y alumnos. Cada uno se llama tabla.

Los registros son cada datos en la tabla. Cada registro tiene campos. Ej: un alumno es un registro en la tabla de alumnos que a su vez tiene varios campos (nombre, apellido, edad, etc).

Estas relaciones se hacen con el MODELO ENTIDAD RELACIÓN.

?Ejemplos de bases de datos relacionaleS:
1) MySQL
2) Oracle
3) SQL Server
4) PostgreSQL
5) SQLite

Cada una tiene sus propias funciones, pero comparten el mismo lenguaje, SQL.

?qué es una base de datos no relacional?
Conocidas como NoSQL. Tienen como principal diferencia que no tienen una estructura definida. Puede haber redundancia de datos. Tiene como prioridad no la integridad de los datos, sino la velocidad. La escala super rápida. La velocidad solo se nota cuando hay MUCHISIMA información.

En las empresas que es importante la integridad de los datos se usan bases de datos relacionales, como empresas de finanzas.La integridad de los datos es crucial para garantizar que los datos almacenados sean precisos, confiables y estén disponibles para su uso cuando se necesiten.

Ej: podes tener los cursos y dentro de cada curso una lista de los alumnos. El estudiante se puede repetir en varios lugares. Lo que se busca es un acceso rápido a los datos. Es creado por empresas que necesitan muchísimo rendimiento.

Ejemplos de bases de datos no relacionales:
1) MongoDB
2) Cassandra
3) Redis
4) Neo4j
5) CouchDB

?qué es ORM?
ORM: Object Relational Mapping. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consultas a través de objetos. Es una capa de abstracción que te permite hacer consultas a través de objetos. Es una librería que te permite conectarte a la base de datos y hacer consult
*/
