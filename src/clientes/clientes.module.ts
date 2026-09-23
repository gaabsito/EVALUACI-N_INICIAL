import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller.js';
import { ClienteDao } from './cliente.dao.js';

@Module({
  controllers: [ClientesController],
  providers: [ClienteDao],
})
export class ClientesModule {}