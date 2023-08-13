import { Injectable } from '@nestjs/common';
import MovieEntity from '../../entity/movie.entity';
import GroupedMovieDto from '../model/movie.dto';
import MovieDto from '../../../application/model/movie.dto';

@Injectable()
export default class MovieMapper {
    entityToDto(entity: MovieEntity): MovieDto {
        const dto = new MovieDto();
        dto.title = entity.title;
        dto.slug = entity.slug;
        dto.image = entity.image;
        dto.director = entity.director;
        dto.score = entity.score;
        dto.budget = entity.budget;
        dto.collection = entity.collection;
        dto.platforms = entity.platforms.map(platform => platform.id);
        if(entity.reviews){
        dto.reviews = entity.reviews.map(reviews => reviews.id);
        }
        return dto;
      }
  transformMovieData(movieData: MovieEntity): GroupedMovieDto {
    const {
      id,
      title,
      slug,
      image,
      director,
      score,
      budget,
      collection,
      platforms,
      reviews,
      createdAt,
      updatedAt,
    } = movieData;
    const reviewsByPlatform: any = {};
    if (reviews) {
      for (const review of reviews) {
        if (!reviewsByPlatform[review.platformId]) {
          reviewsByPlatform[review.platformId] = [];
        }
        reviewsByPlatform[review.platformId].push(review);
      }
    }
    return {
      id,
      title,
      slug,
      image,
      director,
      score,
      budget,
      collection,
      platforms,
      reviewsByPlatform,
      createdAt,
      updatedAt,
    };
  }
}
