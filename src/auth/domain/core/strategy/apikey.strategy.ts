import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from '../auth.service';

@Injectable()
export class ApikeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'api-key',
) {
  constructor(private authService: AuthService) {
    super(
      { header: 'api-key', prefix: '' },
      true,
      async (
        apiKey: string,
        done: (
          arg0: UnauthorizedException | null,
          arg1: boolean | null,
        ) => void,
      ) => {
        if (this.authService.validateApiKey(apiKey)) {
          done(null, true);
        }
        done(new UnauthorizedException(), null);
      },
    );
  }
}
