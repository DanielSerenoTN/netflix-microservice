import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import ReviewEntity from '../domain/entity/review.entity';
import ReviewDto from '../application/model/review.dto';
import IReviewRepository from '../domain/core/review.interface';

@Injectable()
export class ReviewRepository implements IReviewRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(review: ReviewDto): Promise<ReviewEntity> {
    return this.prisma.review.create({ data: review });
  }
}
