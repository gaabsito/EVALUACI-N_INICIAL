interface Usuario {
  id: number;
  nombre: string;
}

class UsuarioDao {
  private usuarios: Usuario[] = [];

  selectAll() {
    return this.usuarios;
  }

  selectById(id: number) {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  insert(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  update(id: number, nombre: string) {
    const usuario = this.selectById(id);

    if (usuario) {
      usuario.nombre = nombre;
    }
  }

  delete(id: number) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }
}

const dao = new UsuarioDao();

dao.insert({ id: 1, nombre: 'Ana' });
console.log('Todos:', dao.selectAll());

console.log('Buscar 1:', dao.selectById(1));

dao.update(1, 'Ana María');
console.log('Actualizado:', dao.selectById(1));

dao.delete(1);
console.log('Después de borrar:', dao.selectAll());

export {};