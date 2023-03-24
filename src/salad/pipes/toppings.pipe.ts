import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ToppingsService } from '../../services/toppings.service';
import { ToppingDTO } from '../dto/topping.dto';

@Injectable()
export class ToppingsPipe implements PipeTransform {
  // constructor(
  //   private toppingsService: ToppingsService,
  //   @Inject('PIPE_CONFIG') private pipeConfig,
  // ) {}

  async transform(toppings: ToppingDTO[]) {
    return toppings;
    // const existingToppings = await this.toppingsService.getAll();

    // const validatedToppings = toppings.reduce((validatedToppings, topping) => {
    //   const found = existingToppings.find(
    //     (t) => t.name === topping.name && t.price === topping.price,
    //   );
    //   if (found) {
    //     validatedToppings.push(found);
    //   } else if (this.pipeConfig.throwError) {
    //     throw new HttpException(
    //       `Unknown Topping : ${JSON.stringify(topping)}`,
    //       HttpStatus.BAD_REQUEST,
    //     );
    //   }
    //   return validatedToppings;
    // }, []);

    // return validatedToppings;
  }
}
