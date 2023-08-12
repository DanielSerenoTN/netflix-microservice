import { Injectable } from '@nestjs/common';
import { ReviewRepository } from '../../infrastructure/review.repository';
import ReviewEntity from '../entity/review.entity';
import ReviewDto from '../../application/model/review.dto';

@Injectable()
export default class ReviewService {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async create(reviewDto: ReviewDto): Promise<ReviewEntity> {
    return await this.reviewRepository.create(reviewDto);
  }
}
