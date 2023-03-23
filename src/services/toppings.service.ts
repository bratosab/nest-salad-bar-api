import { Inject, Injectable, Scope } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { readFile } from 'fs/promises';
import { Observable } from 'rxjs';
import { Topping } from 'src/interfaces/topping.interface';
import { CreateToppingDTO } from 'src/salad/dto/create-topping.dto';

@Injectable()
export class ToppingsService {
  constructor(@Inject('DATA') private readonly dataClient: ClientProxy) {}

  getAll(): Observable<Topping[]> {
    return this.dataClient.send('get_toppings', {}) as Observable<Topping[]>;
  }

  add(newTopping: CreateToppingDTO): Observable<Topping> {
    return this.dataClient.send(
      'create_topping',
      newTopping,
    ) as Observable<Topping>;
  }
}
