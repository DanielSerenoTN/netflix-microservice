import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export enum PrismaModels {
  MOVIE = 'movie',
}

export class PaginatorResponse {
  @ApiProperty({ type: Number })
  @IsNumber()
  pageNumber: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  totalPages: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  totalCount: number;

  @ApiProperty({ type: Object })
  @IsArray()
  data: any;
}
