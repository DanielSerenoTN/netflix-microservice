import { Injectable } from '@nestjs/common';
import MovieEntity from '../domain/entity/movie.entity';
import MovieDto from '../application/model/movie.dto';
import IMovieRepository from '../domain/core/repository.interface';
import UpdateMovieDto from '../application/model/movie.update.dto';
import PrismaService from '../../shared/prisma/prisma.service';
import { PaginatorResponse, PrismaModels } from '../../shared/paginator/types/types';
import { PaginatorService } from '../../shared/paginator/Paginator';

@Injectable()
export class MovieRepository implements IMovieRepository {
  constructor(private readonly prisma: PrismaService, private readonly paginatorService: PaginatorService) {}

  async create(movieDto: MovieDto): Promise<any> {
    const {
      title,
      slug,
      image,
      director,
      score,
      budget,
      collection,
      platforms,
    } = movieDto;
    return await this.prisma.movie.create({
      data: {
        title: title,
        slug: slug,
        image: image,
        director: director,
        score: score,
        budget: budget,
        collection: collection,
        platforms: {
          connect: platforms.map((id: string) => ({ id })),
        },
      },
      include: {
        platforms: true,
      },
    });
  }

  async update(updateMovieDto: UpdateMovieDto): Promise<MovieEntity> {
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
    } = updateMovieDto;
    return await this.prisma.movie.update({
      where: { id: id },
      data: {
        title: title,
        slug: slug,
        image: image,
        director: director,
        score: score,
        budget: budget,
        collection: collection,
        platforms: {
          connect: platforms.map((id: string) => ({ id })),
        },
        reviews: {
          connect: reviews.map((id: string) => ({ id })),
        },
      },
      include: {
        platforms: true,
        reviews: true,
      },
    });
  }
  async getById(id: string): Promise<any> {
    return await this.prisma.movie.findFirst({
      where: { id: id },
      include: {
        platforms: true,
        reviews: true,
      },
    });
  }
  async getAll(page: string, limit: string): Promise<PaginatorResponse>{
    return await this.paginatorService.paginate(PrismaModels.MOVIE ,page, limit)
  };
}
