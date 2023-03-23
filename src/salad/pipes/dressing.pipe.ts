import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { DressingsService } from 'src/services/dressings.service';
import { DressingDTO } from '../dto/dressing.dto';

@Injectable()
export class DressingPipe implements PipeTransform {
  constructor(
    private dressingsService: DressingsService,
    @Inject('PIPE_CONFIG') private pipeConfig,
  ) {}

  transform(dressing: DressingDTO) {
    return dressing;
    // const dressings = this.dressingsService.getAll();

    // const found = dressings.find(
    //   (d) => d.name === dressing.name && d.price === dressing.price,
    // );

    // if (found) {
    //   return found;
    // } else if (this.pipeConfig.throwError) {
    //   throw new HttpException(
    //     `Unknown Topping : ${JSON.stringify(dressing)}`,
    //     HttpStatus.BAD_REQUEST,
    //   );
    // } else {
    //   return null;
    // }
  }
}
