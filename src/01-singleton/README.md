SINGLETON

¿Qué problema resuelve?
Evita tener varias instancias cuando necesitamos un único objeto compartido.

¿Por qué el constructor es private?
Para impedir crear objetos con new desde fuera.

¿Cómo se obtiene la instancia?
Con Configuracion.obtenerInstancia().

¿Qué pasaría si pudiéramos usar new libremente?
Podríamos crear varias instancias distintas.

Ejemplo real:
Una configuración compartida de la aplicación.

¿Qué inconveniente tiene abusar de Singleton?
El estado compartido dificulta las pruebas y el control de los cambios.

Ejecutar:
npx tsx src/01-singleton/singleton.ts