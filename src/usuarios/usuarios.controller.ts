import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuariosController {
  
    constructor(private usuarioService: UsuarioService) {}
    

    @Post('novo')
    create(@Body() usuario): void {
        this.usuarioService.create(usuario);
        
        return usuario;
   }

   @Get(':id')
   public getByname(@Param() name: string){
    const user = this.usuarioService.getByname(name);
    return user;
   }
} 
