import {
  IsString,
  IsUrl,
  IsDate,
  IsOptional,
  IsMongoId,
} from 'class-validator';

export default class PlatformEntity {
  @IsMongoId()
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsUrl()
  icon: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsOptional()
  @IsDate()
  deletedAt?: Date | null;
}
