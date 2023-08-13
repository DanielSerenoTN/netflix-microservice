import { Injectable } from '@nestjs/common';
import MovieEntity from '../../entity/movie.entity';
import GroupedMovieDto from '../model/movie.dto';

@Injectable()
export default class MovieMapper {
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
