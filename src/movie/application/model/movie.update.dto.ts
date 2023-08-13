import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsMongoId } from 'class-validator';
import MovieDto from './movie.dto';

export default class UpdateMovieDto extends MovieDto {
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
    description: 'Ids of the movienreviews',
    example: ['64d7d3e06a734de4a6e570b9'],
    required: true,
    nullable: false,
  })
  @IsDefined()
  reviews: string[];
}
