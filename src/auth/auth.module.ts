import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategies';
@Module({
   imports: [
    UserModule,
     PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],

})
export class AuthModule {}