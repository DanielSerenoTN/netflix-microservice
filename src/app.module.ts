import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import PlatformModule from './platform/application/platform.module';
import ReviewModule from './review/application/review.module';
import MovieModule from './movie/application/movie.module';

@Module({
  imports: [PlatformModule, ReviewModule, MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
