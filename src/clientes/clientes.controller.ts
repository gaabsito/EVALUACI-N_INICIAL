import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClienteFactory } from './cliente.factory.js';
import { ClienteDao } from './cliente.dao.js';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly dao: ClienteDao) {}

  @Post()
  crear(@Body('nombre') nombre: string) {
    const cliente = ClienteFactory.crear(nombre);
    return this.dao.guardar(cliente);
  }

  @Get()
  listar() {
    return this.dao.listar();
  }
}