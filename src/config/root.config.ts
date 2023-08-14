import { IsInstance } from 'class-validator';
import AuthConfig from './auth.config';

export default class RootConfig {
  @IsInstance(AuthConfig)
  auth!: AuthConfig;
}
