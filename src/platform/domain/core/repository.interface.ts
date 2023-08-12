import PlatformEntity from '../entity/platform.entity';
import PlatformDto from '../../application/model/platform.dto';
export default interface IPlatformRepository {
  create(platform: PlatformDto): Promise<PlatformEntity>;
}
