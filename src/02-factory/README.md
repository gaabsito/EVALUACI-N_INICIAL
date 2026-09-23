FACTORY

¿Qué problema resuelve?
Centraliza la creación de distintos tipos de objetos.

¿Qué ventaja tiene frente a usar new por todas partes?
Los cambios en la creación se hacen en un solo lugar.

¿Cómo añadiríamos WhatsAppNotification?
Crearíamos su clase y añadiríamos la opción whatsapp a la Factory.

¿Quién crea los objetos?
NotificacionFactory.

¿Cómo reduce el acoplamiento?
Permite usar una interfaz común sin conocer las clases concretas.

Ejecutar:
npx tsx src/02-factory/factory.ts