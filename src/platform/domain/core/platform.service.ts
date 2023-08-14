import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PlatformRepository } from '../../infrastructure/platform.repository';
import PlatformEntity from '../entity/platform.entity';
import PlatformDto from '../../application/model/platform.dto';

@Injectable()
export default class PlatformService {
  constructor(private readonly platformRepository: PlatformRepository) {}

  async create(platformDto: PlatformDto): Promise<PlatformEntity> {
    // try {
    return await this.platformRepository.create(platformDto);
    // } catch (e) {
    //   throw new InternalServerErrorException('Could not create platform');
    // }
  }
}
