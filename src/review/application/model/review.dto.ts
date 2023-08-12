import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  Max,
  IsMongoId,
} from 'class-validator';

export default class ReviewDto {
  @IsDefined()
  @IsString()
  @IsMongoId()
  @ApiProperty({
    description: 'ID of the movie being reviewed',
    example: '64d7b6878b53321d0bb152cc',
    required: true,
    nullable: false,
  })
  movieId: string;

  @IsDefined()
  @IsString()
  @IsMongoId()
  @ApiProperty({
    description: 'ID of the platform being reviewed',
    example: '64d7b6878b53321d0bb152dd',
    required: true,
    nullable: false,
  })
  platformId: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Author of the review',
    example: 'John Doe',
    required: true,
    nullable: false,
  })
  author: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Text content of the review',
    example: 'Great movie, highly recommended!',
    required: true,
    nullable: false,
  })
  body: string;

  @IsDefined()
  @IsNumber()
  @Min(0)
  @Max(5)
  @ApiProperty({
    description: 'Score of the review (0 to 5)',
    example: 4.5,
    required: true,
    nullable: false,
  })
  score: number;
}
