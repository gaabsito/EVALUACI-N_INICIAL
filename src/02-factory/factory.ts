interface Notificacion {
  enviar(): void;
}

class Email implements Notificacion {
  enviar(): void {
    console.log('Enviando email');
  }
}

class Sms implements Notificacion {
  enviar(): void {
    console.log('Enviando SMS');
  }
}

class NotificacionFactory {
  static crear(tipo: 'email' | 'sms'): Notificacion {
    if (tipo === 'email') {
      return new Email();
    }

    return new Sms();
  }
}

const email = NotificacionFactory.crear('email');
const sms = NotificacionFactory.crear('sms');

email.enviar();
sms.enviar();

export {};