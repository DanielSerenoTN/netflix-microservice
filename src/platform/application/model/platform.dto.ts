import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export default class PlatformDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Name of the platform',
    example: 'HBO MAX',
    required: true,
    nullable: false,
  })
  title: string;
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Icon of the platform',
    example: 'icon.jpg',
    required: true,
    nullable: false,
  })
  icon: string;
}
