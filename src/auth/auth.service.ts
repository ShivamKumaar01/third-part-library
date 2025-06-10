import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
// import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor( private userService: UserService,
    private jwtService: JwtService) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.findOneByEmail(email);
    if(user){
      const isMatch = await bcrypt.compare(pass,user.password);
      if(!isMatch){
        throw new UnauthorizedException()
      }
    }
    // if (user?.password !== "$2b$10$kY6F2hpH9jt39knXOYxRP.r.5P8aT/5nutmMxJRGuArvkl5/qFPfq") {
    //   console.log("hellow");
    //   throw new UnauthorizedException();
    // }
     const payload = { sub: user?.id ,useremail: user?.email};

     return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}