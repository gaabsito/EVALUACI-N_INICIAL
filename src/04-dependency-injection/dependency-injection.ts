interface Notificador {
  enviar(mensaje: string): void;
}

class EmailService implements Notificador {
  enviar(mensaje: string): void {
    console.log(`Email: ${mensaje}`);
  }
}

class UsuarioService {
  constructor(private notificador: Notificador) {}

  registrar(nombre: string): void {
    console.log(`Usuario registrado: ${nombre}`);
    this.notificador.enviar(`Bienvenido, ${nombre}`);
  }
}

const email = new EmailService();
const usuarios = new UsuarioService(email);

usuarios.registrar('Ana');

export {};