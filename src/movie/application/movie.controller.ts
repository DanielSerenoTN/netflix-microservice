import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import MovieService from '../domain/core/movie.service';
import MovieDto from './model/movie.dto';
import MovieEntity from '../domain/entity/movie.entity';
import { MongoIdValidationPipe } from '../../shared/pipes/mongo-id-validation.pipe';
import UpdateMovieDto from './model/movie.update.dto';
import GroupedMovieDto from '../domain/incoming/model/movie.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

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
  @ApiQuery({ name: 'page', required: false, description: 'Indicates the page number where the paging will start.' })
  @ApiQuery({ name: 'limit', required: false, description: 'Indicate the limit of movies you will get in your request' })
  @Get()
  async getAll(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ): Promise<GroupedMovieDto> {
    return await this.movieService.getAll(page, limit);
  }
  @Get('/:id')
  async getById(
    @Param('id', MongoIdValidationPipe) id: string,
  ): Promise<GroupedMovieDto> {
    return await this.movieService.getById(id);
  }
  @ApiOperation({
    summary: 'Clones a movie 100%, including associated platforms and reviews',
    description: 'This endpoint allows you to clone a movie along with its platforms and reviews.',
  })
  @Post('/clone/:id')
  async clone(
    @Param('id', MongoIdValidationPipe) id: string,
  ): Promise<MovieEntity> {
    return await this.movieService.clone(id);
  }
}
