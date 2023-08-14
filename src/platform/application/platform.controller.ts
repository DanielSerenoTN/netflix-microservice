import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import PlatformService from '../domain/core/platform.service';
import PlatformDto from './model/platform.dto';
import PlatformEntity from '../domain/entity/platform.entity';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth('JWT')
@ApiBearerAuth('API-KEY')
@UseGuards(AuthGuard(['jwt', 'api-key']))
@Controller('platforms')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Post()
  async create(@Body() platformDto: PlatformDto): Promise<PlatformEntity> {
    return this.platformService.create(platformDto);
  }
}
