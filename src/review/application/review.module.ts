import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import ReviewService from '../domain/core/review.service';
import { ReviewRepository } from '../infrastructure/review.repository';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [ReviewController],
  providers: [ReviewService, ReviewRepository, PrismaClient],
  exports: [ReviewService],
})
export default class ReviewModule {}
