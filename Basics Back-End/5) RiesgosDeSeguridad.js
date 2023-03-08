/*
!SEGURIDAD: todo dato que llegue desde un cliente o usuario que sea escapado. Hay que limpiar esa información que llega a través de un formulario. Limpiarles comillas, / , etc/. También es importante validar los datos que lleguen. 

10) Falsificación de solicitudes del lado del servidor (SSRF)
El back puede tener acceso a datos. En el front puede darsele al cliente acceso a dicha información.

Hay que validar las URL, con expresión regulares. Evitar el redireaccionamiento.

9) Falla en el registro y monitoreo de sistemas: registrar quien inició sesión, cuánto tiempo, cuándo se fué? Poner un limitante para un procesos y si se supera enviar una alerta. Uno puede ser en el registro de sesión. Los frameworks suelen tener herramientas para esto que registran logeos, historial, horario, umbrales, etc. Sesiones a un login que está fallando.

8) Fallas en el software y en la integridad de los datos: no usar herramientas o frameworks que no tienen comunidades grandes o son conocidas. Ver comentarios sobre la herramienta. Las herramientas más comunes tienen una comunidad detrás.

7) Fallas de identificaicón y autenticación: cada sistema debe tener un inicio de sesión. El sistema sabe quién es la persona que está ingresando. La vulnerabilidad puede ser que no tiene un limitante de intentos fallidos. También como el usuario recupera su contraseña, especialmente por medio de pregunas secretas.

Otra vulnerabilidad es mostrar el id del usuario en la url. Eso hay que evitarlo.

Soluciones: Poner inicio de sesión multifactor. No dejar contraseñas fáciles. Obligar al usuario poner contraseñas complejas.

Se puede optar por un servicio de tercero, auth), firebase.

6) Componentes vulnerables y desactualizados: los sistemas operativos tienen parches por razones, entre otras, de seguridad. Lo ideal es tener todo actualizado. Sino migrar a una versión que tenga soporte.

5) Configuración de seguridad incorrecta: tener puertos abiertos en el sistema de producción está mal. O software o bases de datos que sean fácil de acceder. Que no se pueda acceder a la base de datos desde cualquier ip. Lo ideal es hacer un usuario para cada tipo de persona que necesita la base de datos. Otra posibilidad puede ser hacer cambiar al usuario la password cada tanto.

Cerrar puertos que estén abiertos demás.

4) Diseño inseguro: patrones de diseño y mantenimiento y nuevos requirimientos. Pueden generar nuevas vulnerabilidades. También puede pasar que pones una limitación en el front end, pero alguien que sabe puede hacer la petición directo al back evitando esa limitación. Las seguridades hay que ponerlas en el back.

El software tiene un ciclo de vida. La clave son las pruebas unitarias de seguridad para ver y que sigan funcionando esos bloqueos. Poner limitantes desde el back.

3) Inyección: inyección de sql cuando tu sistema permite que se metan dentro de tus consultas cosas que no esperas. También hay inyecciones con un comando. Limitar la posibilidad de escribir letras cuando se piden números y viceversa, lo mismo con comas, puntos, barras, etc. Con regex y frameworks.

2) Fallás criptograficas: hay información como personal, tarjetas, passwords, historial médico que hay que encriptar. Hay que encriptar con herramientas modernas (Argon2, scrypt, bcrypt, PBKDF2) o los métodos que te den el cliente. Cifrado con semillas.

1) Perdida de control de acceso: radica en la jerarquización y permisos. No tenes permiso para editar comentarios. En varios sistemas entras a la url, la cambias y te permite entrar usando las facultades de otro usuario. Se puede solucionar a través de un filter o middleware. Validar que tenga permiso. Poner tokens que tenga caducidad. Lo ponen en su base de datos, pero no se usa en sus sistemas.

*/
