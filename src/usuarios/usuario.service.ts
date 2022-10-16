
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
   
    public getByname(name: string) {
       throw new Error('Method not implemented.');
   } 
   
   public create(usuario): void{
    return usuario;
   }
}
