import { IsNotEmpty, IsString, IsInt, IsEmail } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsInt()
  idade: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;
}
