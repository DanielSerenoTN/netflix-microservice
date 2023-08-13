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
  ValidateNested,
  IsArray,
} from 'class-validator';
import PlatformEntity from 'src/platform/domain/entity/platform.entity';
import ReviewEntity from 'src/review/domain/entity/review.entity';

export default class GroupedMovieDto {
  @ApiProperty({
    description: 'ID of the movie',
    example: '64d7b6878b53321d0bb152bb',
    required: true,
    nullable: false,
  })
  id: string;

  @ApiProperty({
    description: 'Title of the movie',
    example: "Megalodon 3",
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Slug of the movie',
    example: "megalodon-3",
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiProperty({
    description: 'Image of the movie',
    example: 'megalodon.jpg',
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({
    description: 'Director of the movie',
    example: 'Guillermo del toro',
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  director: string;

  @IsDefined()
  @IsNumber()
  @Min(0)
  @Max(5)
  score: number;

  @ApiProperty({
    description: 'Budget assigned to the film',
    example: '200,000,000',
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  budget: string;
  @ApiProperty({
    description: 'Money raised by the movie',
    example: '600,000,000',
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  collection: string;
  @ApiProperty({
    description: 'Ids of the platform being reviewed',
    example:  [
        {
            "id": "64d856f23cf92be6742e747b",
            "title": "Plataforma 2",
            "icon": "icono-plataforma-2",
            "createdAt": "2023-08-13T04:07:14.363Z",
            "updatedAt": "2023-08-13T06:18:34.743Z",
            "deletedAt": null,
            "movieId": "64d875baf430a5a429a5f732"
        }
    ],
    required: true,
    nullable: false,
  })
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  platforms?: PlatformEntity[];
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

  @ApiProperty({
    description: 'Reviews grouped by platform',
    example: '2023-07-12T16:42:47.093Z',
    nullable: false,
    required: true,
  })
  @IsDefined()
  reviewsByPlatform: { [platformId: string]: ReviewEntity[] };

}
