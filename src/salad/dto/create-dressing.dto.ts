import { IsNotEmpty, IsNumber } from 'class-validator';
import { Dressing } from '../../interfaces/dressing.interface';

export class CreateDressingDTO implements Omit<Dressing, 'id'> {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
