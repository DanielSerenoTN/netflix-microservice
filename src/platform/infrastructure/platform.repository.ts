import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import PlatformEntity from '../domain/entity/platform.entity';
import PlatformDto from '../application/model/platform.dto';
import IPlatformRepository from '../domain/core/repository.interface';

@Injectable()
export class PlatformRepository implements IPlatformRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(platformDto: PlatformDto): Promise<PlatformEntity> {
    const { name, icon } = platformDto;
    return await this.prisma.platform.create({
      data: {
        name: name,
        icon: icon,
      },
    });
  }
}
