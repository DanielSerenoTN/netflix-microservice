import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export default class PlatformDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Name of the platform' })
  name: string;
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Icon of the platform' })
  icon: string;

  @ApiProperty({ description: 'Deletion timestamp' })
  deletedAt: Date | null;
}
