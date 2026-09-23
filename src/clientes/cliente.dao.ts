import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteDao {
  private clientes: { nombre: string }[] = [];

  guardar(cliente: { nombre: string }) {
    this.clientes.push(cliente);
    return cliente;
  }

  listar() {
    return this.clientes;
  }
}