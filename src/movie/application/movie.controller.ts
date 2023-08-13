import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import MovieService from '../domain/core/movie.service';
import MovieDto from './model/movie.dto';
import MovieEntity from '../domain/entity/movie.entity';
import { MongoIdValidationPipe } from '../../shared/pipes/mongo-id-validation.pipe';
import UpdateMovieDto from './model/movie.update.dto';
import GroupedMovieDto from '../domain/incoming/model/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(@Body() movieDto: MovieDto): Promise<MovieEntity> {
    return this.movieService.create(movieDto);
  }
  @Put()
  async update(@Body() updateMovieDto: UpdateMovieDto): Promise<MovieEntity> {
    return this.movieService.update(updateMovieDto);
  }
  @Get("/:id")
  async getById(@Param('id', MongoIdValidationPipe) id: string): Promise<GroupedMovieDto> {
    return await this.movieService.getById(id);
  }
}
