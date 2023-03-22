import { IsNotEmpty, IsNumber } from 'class-validator';
import { Topping } from 'src/interfaces/topping.interface';

export class ToppingDTO implements Topping {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
