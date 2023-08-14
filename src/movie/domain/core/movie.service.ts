import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { MovieRepository } from '../../infrastructure/movie.repository';
import MovieEntity from '../entity/movie.entity';
import MovieDto from '../../application/model/movie.dto';
import UpdateMovieDto from '../../../movie/application/model/movie.update.dto';
import generateSlug from '../util/slug.util';
import MovieMapper from '../incoming/mapper/movie.mapper';
import GroupedMovieDto from '../incoming/model/movie.dto';
import { PaginatorResponse } from '../../../shared/paginator/types/types';
@Injectable()
export default class MovieService {
  constructor(
    private readonly movieRepository: MovieRepository,
    private movieMapper: MovieMapper,
  ) {}

  async create(movieDto: MovieDto): Promise<MovieEntity> {
    try {
      const movieDtoWithSlug: MovieDto = {
        ...movieDto,
        slug: generateSlug(movieDto.title),
      };
      return await this.movieRepository.create(movieDtoWithSlug);
    } catch (e) {
      throw new InternalServerErrorException('Failed to create movie');
    }
  }
  async update(updateMovieDto: UpdateMovieDto): Promise<MovieEntity> {
    try {
      const updatedMovie = await this.movieRepository.update(updateMovieDto);
      if (!updatedMovie) {
        throw new NotFoundException(
          `Movie with ID ${updateMovieDto.id} not found`,
        );
      }
      return updatedMovie;
    } catch (e) {
      throw new InternalServerErrorException('Failed to update movie');
    }
  }
  async getById(id: string): Promise<GroupedMovieDto> {
    const movie = await this.movieRepository.getById(id);
    return this.movieMapper.transformMovieData(movie);
  }
  async clone(id: string): Promise<MovieEntity> {
    try {
      const movie = await this.movieRepository.getById(id);
      if (!movie) {
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }
      const movieDto = this.movieMapper.entityToDto(movie);

      return await this.movieRepository.create(movieDto);
    } catch (e) {
      throw new InternalServerErrorException('Failed to clone movie');
    }
  }
  async getAll(page: string, limit: string): Promise<PaginatorResponse> {
    try {
      const response = await this.movieRepository.getAll(page, limit);
      if (!response) {
        throw new NotFoundException('No movies found');
      }
      return response;
    } catch (e) {
      throw new InternalServerErrorException('Failed to fetch movies');
    }
  }
}
