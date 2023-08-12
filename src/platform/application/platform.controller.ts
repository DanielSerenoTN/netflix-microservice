import { Body, Controller, Post } from '@nestjs/common';
import PlatformService from '../domain/core/platform.service';
import PlatformDto from './model/platform.dto';

@Controller('platforms')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Post()
  async create(@Body() platformDto: PlatformDto): Promise<any> {
    return this.platformService.create(platformDto);
  }
}
