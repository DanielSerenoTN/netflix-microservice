import * as process from 'process';
import RootConfig from './config/root.config';

export default (): RootConfig => ({
  auth: {
    apiKey: process.env.AUTH_API_KEY || 'dev-api-key',
    jwtExpire: '2h',
    jwtSecret: process.env.JWT_SECRET || 'dev-jwt',
    encryptionSecret:
      process.env.AES_ENCRYPTION_SECRET || 'HOWSHOULDAUTHENTICATIONCHANGE',
  },
});
