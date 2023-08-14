import { Module } from '@nestjs/common';
import { PlatformController } from './platform.controller';
import PlatformService from '../domain/core/platform.service';
import { PlatformRepository } from '../infrastructure/platform.repository';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [PlatformController],
  providers: [PlatformService, PlatformRepository, PrismaClient],
  exports: [PlatformService],
})
export default class PlatformModule {}
