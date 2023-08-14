import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  Max,
  IsDate,
  IsOptional,
  IsMongoId,
} from 'class-validator';

export default class ReviewEntity {
  @ApiProperty({
    description: 'ID of the movie',
    example: '64d7b6878b53321d0bb152bb',
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsMongoId()
  id: string;

  @ApiProperty({
    description: 'Rating of the review',
    example: 4.5,
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNumber()
  @Min(0)
  @Max(5)
  score: number;

  @ApiProperty({
    description: 'Author of the review',
    example: 'John Doe',
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({
    description: 'Text content of the review',
    example: 'Great movie, highly recommended!',
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  body: string;

  @ApiProperty({
    description: 'ID of the movie being reviewed',
    example: '64d856f23cf92be6742e7479',
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsString()
  movieId: string;

  @ApiProperty({
    description: 'ID of the platform being reviewed',
    example: '64d7d3c56a734de4a6e570b7',
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsString()
  platformId: string;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2023-08-12T16:42:47.093Z',
    required: true,
    nullable: false,
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    description: 'Update timestamp',
    example: '2023-08-12T16:42:47.093Z',
    required: true,
    nullable: false,
  })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({
    description: 'Delete timestamp',
    example: '2023-07-12T16:42:47.093Z',
    nullable: true,
    required: false,
  })
  @IsOptional()
  @IsDate()
  deletedAt?: Date | null;
}
