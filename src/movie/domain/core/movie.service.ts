import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../../infrastructure/movie.repository';
import MovieEntity from '../entity/movie.entity';
import MovieDto from '../../application/model/movie.dto';
import UpdateMovieDto from '../../../movie/application/model/movie.update.dto';
import generateSlug from '../util/slug.util';
import MovieMapper from '../incoming/mapper/movie.mapper';
import GroupedMovieDto from '../incoming/model/movie.dto';
@Injectable()
export default class MovieService {
  constructor(
    private readonly movieRepository: MovieRepository,
    private movieMapper: MovieMapper,
  ) {}

  async create(movieDto: MovieDto): Promise<MovieEntity> {
    const movieDtoWithSlug: MovieDto = {
      ...movieDto,
      slug: generateSlug(movieDto.title),
    };
    return await this.movieRepository.create(movieDtoWithSlug);
  }
  async update(updateMovieDto: UpdateMovieDto): Promise<MovieEntity> {
    return await this.movieRepository.update(updateMovieDto);
  }
  async getById(id: string): Promise<GroupedMovieDto> {
    const movie = await this.movieRepository.getById(id);
    return this.movieMapper.transformMovieData(movie);
  }
  async clone(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.getById(id);
    if(!movie){
    
    }
    const movieDto = this.movieMapper.entityToDto(movie);
    
    return await this.movieRepository.create(movieDto);
    
  }
  async getAll(page: string, limit: string): Promise<any> {
    return this.movieRepository.getAll(page, limit);
  }
}
