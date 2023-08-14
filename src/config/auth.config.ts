import { IsNotEmpty } from 'class-validator';

export default class AuthConfig {
  @IsNotEmpty()
  apiKey!: string;

  @IsNotEmpty()
  jwtExpire!: string;

  @IsNotEmpty()
  jwtSecret!: string;

  @IsNotEmpty()
  encryptionSecret!: string;
}
