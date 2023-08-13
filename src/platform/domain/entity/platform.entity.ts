import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import MovieEntity from 'src/movie/domain/entity/movie.entity';

export default class PlatformEntity {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'ID of the platform' })
  id!: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Title of the platform' })
  title!: string;

  @IsString()
  @ApiProperty({ description: 'Icon of the platform' })
  icon!: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt?: Date;

  @ApiProperty({ description: 'Update timestamp' })
  updatedAt?: Date;

  @ApiProperty({ description: 'Deletion timestamp' })
  @IsOptional()
  deletedAt?: Date | null;

  @IsOptional()
  @ApiProperty({ description: 'Movie associated with the platform' })
  movie?: MovieEntity;

  @IsOptional()
  @ApiProperty({ description: 'ID of the associated movie' })
  movieId?: string | null;
}
