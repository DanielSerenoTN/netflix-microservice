import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from '../domain/core/auth.service';
import AuthDto from './model/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Generate Demo Token',
    description:
      'This endpoint generates an authentication token for practice and skill demonstration purposes. '
  })
  @Post()
  async create(@Body() authDto: AuthDto): Promise<string> {
    return this.authService.generateJWT(authDto);
  }
}


