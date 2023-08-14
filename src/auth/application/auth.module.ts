import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import config from '../../config';
import { AuthService } from '../domain/core/auth.service';
import { ApikeyStrategy } from '../domain/core/strategy/apikey.strategy';

import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { JwtStrategy } from '../domain/core/strategy/jwt.strategy';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: config().auth.jwtSecret,
      signOptions: {
        expiresIn: config().auth.jwtExpire,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ApikeyStrategy, JwtStrategy, ConfigService],
  exports: [AuthService],
})
export class AuthModule {}
