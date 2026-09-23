class Configuracion {
  private static instancia: Configuracion;

  private constructor() {}

  static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }

    return Configuracion.instancia;
  }
}

const primera = Configuracion.obtenerInstancia();
const segunda = Configuracion.obtenerInstancia();

console.log('¿Es el mismo objeto?', primera === segunda);

export {};