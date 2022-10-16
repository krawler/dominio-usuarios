import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuariosController } from './usuarios.controller';

@Module({
    imports: [],
    controllers: [UsuariosController],
    providers: [UsuarioService],
})
export class UsuariosModule {}
