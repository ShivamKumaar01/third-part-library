import { IsEmail, IsEnum, IsInt, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string
    
    @IsString()
    password: string

    @IsEmail()
    email: string

    @IsInt()
    age: number

    @IsString()
    @IsOptional()
    ProfilePic?:string

    @IsEnum(['m', 'f', 'u'], { message: 'gender must be m, f or u' })
    gender: string;
}
