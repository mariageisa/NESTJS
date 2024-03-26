import { IsEmail, IsString, IsStrongPassword } from "class-validator"


export class CreateUserDTO {

    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsString()
    cpf: string

    @IsStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minSymbols: 0,
        minLowercase: 0,
        minNumbers: 0,
    })
    password: string

}