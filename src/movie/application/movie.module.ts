import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import MovieService from '../domain/core/movie.service';
import { MovieRepository } from '../infrastructure/movie.repository';
import { PrismaClient } from '@prisma/client';
import MovieMapper from '../domain/incoming/mapper/movie.mapper';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [MovieService, MovieRepository, PrismaClient, MovieMapper],
  exports: [MovieService],
})
export default class MovieModule {}
