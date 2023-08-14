import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import ReviewService from '../domain/core/review.service';
import ReviewDto from './model/review.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth('JWT')
@ApiBearerAuth('API-KEY')
@UseGuards(AuthGuard(['jwt', 'api-key']))
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() reviewDto: ReviewDto): Promise<any> {
    return this.reviewService.create(reviewDto);
  }
}
