import { IsNotEmpty } from 'class-validator';
import { Salad } from '../interfaces/salad.interface';

export class CreateSaladDTO implements Pick<Salad, 'username'> {
  @IsNotEmpty()
  username: string;
}
