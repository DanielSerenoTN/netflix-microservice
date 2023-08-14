import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  Max,
  IsOptional,
} from 'class-validator';

export default class MovieDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Title of the movie',
    example: 'John Wick',
    required: true,
    nullable: false,
  })
  title: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Transformed title of the movie',
    example: 'john-wick',
    required: false,
    nullable: true,
  })
  slug: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Image of the movie',
    example: 'image.jpg',
    required: true,
    nullable: false,
  })
  image: string;
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Director of the movie',
    example: 'Guillermo del toro',
    required: true,
    nullable: false,
  })
  director: string;
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
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Budget allocated to the movie',
    example: '200,000,000',
    required: true,
    nullable: false,
  })
  budget: string;
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Money raised by the movie',
    example: '600,000,000',
    required: true,
    nullable: false,
  })
  collection: string;
  @ApiProperty({
    description: 'Platforms where the film is available',
    example: ['64d7d3c56a734de4a6e570b7'],
    required: true,
    nullable: false,
  })
  @IsDefined()
  platforms: string[];

  @IsOptional()
  reviews: string[];
}
