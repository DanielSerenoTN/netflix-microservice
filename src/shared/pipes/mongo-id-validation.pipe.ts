import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isMongoId } from 'class-validator';

@Injectable()
export class MongoIdValidationPipe implements PipeTransform<string> {
  transform(value: string): string {
    if (!isMongoId(value)) {
      throw new BadRequestException('Invalid ID parameter');
    } else {
      return value;
    }
  }
}
