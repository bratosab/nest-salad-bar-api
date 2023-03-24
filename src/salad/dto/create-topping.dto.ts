import { IsNotEmpty, IsNumber } from 'class-validator';
import { Topping } from '../../interfaces/topping.interface';

export class CreateToppingDTO implements Omit<Topping, 'id'> {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
