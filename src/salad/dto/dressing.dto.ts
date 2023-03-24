import { IsNotEmpty, IsNumber } from 'class-validator';
import { Dressing } from '../../interfaces/dressing.interface';

export class DressingDTO implements Dressing {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
