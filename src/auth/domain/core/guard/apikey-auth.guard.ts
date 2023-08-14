import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApikeyAuthGuard extends AuthGuard('api-key') {}
