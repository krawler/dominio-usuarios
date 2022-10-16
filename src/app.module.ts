import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsuariosModule],
  controllers: [
    UsuariosController, AppController],
  providers: [AppService],
})
export class AppModule { }
