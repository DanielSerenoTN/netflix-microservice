import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export default class AuthDto {
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'User email address',
    example: 'daniel@gmail.com',
    required: true,
    nullable: false,
  })
  email: string;
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User password',
    example: '123',
    required: true,
    nullable: false,
  })
  password: string;

}