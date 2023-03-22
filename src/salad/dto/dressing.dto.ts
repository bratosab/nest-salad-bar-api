import { IsNotEmpty, IsNumber } from 'class-validator';
import { Dressing } from 'src/interfaces/dressing.interface';

export class DressingDTO implements Dressing {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
