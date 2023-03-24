import { IsNotEmpty, isNumber, IsNumber } from 'class-validator';
import { Topping } from '../../interfaces/topping.interface';

export class ToppingDTO implements Topping {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
