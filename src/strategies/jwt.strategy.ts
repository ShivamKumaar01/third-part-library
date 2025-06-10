// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy, ExtractJwt } from 'passport-jwt';
// import { ConfigService } from '@nestjs/config';
// import { UserService } from 'src/user/user.service';
// // import { AccessTokenPayload } from '../types/AccessTokenPayload';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly configService: ConfigService,
//     private userService:UserService
//   ) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: configService.get<string>('JWT_SECRET'),
//     });
//   }

//   async validate(payload:any ) {
//     const user=await this.userService.findOne(payload.email)
//     if(!user){
//         throw new UnauthorizedException();
//     }
//     return {email:payload.email}
//   }
// }