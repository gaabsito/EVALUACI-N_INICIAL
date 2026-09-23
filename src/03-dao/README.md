DAO

¿Qué significa DAO?
Data Access Object: objeto de acceso a datos.

¿Cuál es su responsabilidad?
Separar el acceso a los datos de la lógica de la aplicación.

¿Qué relación tiene con una base de datos?
Gestiona sus consultas y cambios. Aquí usamos un array como simulación.

¿Qué operaciones tiene?
selectAll, selectById, insert, update y delete.

¿En qué se diferencia de Repository?
DAO se centra en cómo acceder a los datos. Repository representa una colección de objetos del dominio y ofrece las consultas que necesita la aplicación. Puede utilizar un DAO internamente.

Ejecutar:
npx tsx src/03-dao/dao.ts

