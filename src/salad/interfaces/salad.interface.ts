import { Dressing } from '../../interfaces/dressing.interface';
import { Topping } from '../../interfaces/topping.interface';

export interface Salad {
  id: string;
  username: string;
  date: Date;
  toppings?: Topping[];
  dressing?: Dressing;
}
