import {
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import RootConfig from '../../../config/root.config';
import AuthConfig from '../../../config/auth.config';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService<RootConfig, true>,
  ) {}

  validateApiKey(apiKey: string): string | undefined {
    const configApiKey = this.configService.get<AuthConfig>('auth').apiKey;
    const apiKeys: string[] = [configApiKey];

    return apiKeys.find((key) => apiKey == key);
  }

  async generateJWT(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
