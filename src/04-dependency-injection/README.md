DEPENDENCY INJECTION

¿Qué es una dependencia?
Un objeto que una clase necesita para trabajar.

¿Qué significa inyectarla?
Proporcionarla desde fuera de la clase.

¿Qué diferencia hay entre usar new dentro y recibirla por constructor?
Con new, la clase elige una implementación concreta. Por constructor, podemos proporcionarle otra compatible.

¿Qué problema genera un alto acoplamiento?
Dificulta cambiar y reutilizar las clases.

¿Qué ventaja tiene para las pruebas?
Permite sustituir servicios reales por objetos de prueba.

¿Por qué es importante en NestJS?
NestJS la utiliza para proporcionar servicios a los componentes que los necesitan.

Ejecutar:
npx tsx src/04-dependency-injection/dependency-injection.ts