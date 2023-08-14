import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import PlatformModule from './platform/application/platform.module';
import ReviewModule from './review/application/review.module';
import MovieModule from './movie/application/movie.module';
import { AuthModule } from './auth/application/auth.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    PlatformModule,
    ReviewModule,
    MovieModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
