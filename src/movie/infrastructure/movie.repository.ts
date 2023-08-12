import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import MovieEntity from '../domain/entity/movie.entity';
import MovieDto from '../application/model/movie.dto';
import IMovieRepository from '../domain/core/repository.interface';

@Injectable()
export class MovieRepository implements IMovieRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createMovie(movie: MovieDto): Promise<MovieEntity> {
    return this.prisma.movie.create(movie);
  }
}
