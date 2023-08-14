import { Injectable } from '@nestjs/common';
import { PrismaModels } from './types/types';
import PrismaService from '../prisma/prisma.service';

@Injectable()
export class PaginatorService {
  constructor(private readonly db: PrismaService) {}

  async paginate(
    model: PrismaModels,
    page: string,
    limit: string,
  ): Promise<any> {
    const limitNumber = +limit || 20;
    const pageNumber = +page || 1;

    const skipVal = limitNumber * (pageNumber - 1);

    const totalCount = await this.db[model].count();
    const totalPages = Math.ceil(totalCount / limitNumber);

    const data = await this.db[model].findMany({
      skip: skipVal,
      take: limitNumber,
      include: {
        platforms: true,
        reviews: true,
      },
    });

    return {
      pageNumber,
      totalPages,
      totalCount,
      data: data,
    };
  }
}
