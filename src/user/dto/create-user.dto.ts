import { IsEmail, IsEnum, IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string
    
    @IsString()
    password: string

    @IsEmail()
    email: string

    @IsInt()
    age: number

    @IsEnum(['m', 'f', 'u'], { message: 'gender must be m, f or u' })
    gender: string;
}
