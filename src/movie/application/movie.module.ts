import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import MovieService from '../domain/core/movie.service';
import { MovieRepository } from '../infrastructure/movie.repository';
import MovieMapper from '../domain/incoming/mapper/movie.mapper';
import { PrismaModule } from '../../shared/prisma/prisma.module';
import { PaginatorService } from '../../shared/paginator/Paginator';

@Module({
  imports: [PrismaModule],
  controllers: [MovieController],
  providers: [MovieService, MovieRepository, MovieMapper, PaginatorService],
  exports: [MovieService],
})
export default class MovieModule {}
