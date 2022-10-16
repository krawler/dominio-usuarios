import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Usuario{
   
    id: number;
    @IsNotEmpty()
    @IsString()
    nome:string;
    @IsEmail()
    email:string;
    @IsNotEmpty()
    senha:string;
    @IsNotEmpty()
    nomeCompleto: string;
    @IsDate()
    dataEntrada: Date;
}