import { Body, Controller, Post } from '@nestjs/common';
import ReviewService from '../domain/core/review.service';
import ReviewDto from './model/review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() reviewDto: ReviewDto): Promise<any> {
    return this.reviewService.create(reviewDto);
  }
}
