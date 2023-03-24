import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import { Observable } from 'rxjs';
import { CreateSaladDTO } from './dto/create-salad.dto';
import { DressingDTO } from './dto/dressing.dto';
import { ToppingDTO } from './dto/topping.dto';
import { Salad } from './interfaces/salad.interface';

@Injectable()
export class SaladService {
  constructor(@Inject('DATA') private readonly dataClient: ClientProxy) {}

  private findSalad(saladId: string): Salad {
    throw new NotImplementedException();
    // return this.inMemorySalads.find((s) => s.id === saladId);
  }

  /**
   * Get all salads
   * @returns An observable containes all salads
   */
  getAll(): Observable<Salad[]> {
    return this.dataClient.send('get_salads', {}) as Observable<Salad[]>;
  }

  /**
   * Create a new salad
   * @param salad the salad to create
   * @returns An observable containing the salad just created
   */
  createSalad(salad: CreateSaladDTO): Observable<Salad> {
    const newSalad = { ...salad, id: randomUUID(), date: new Date() };

    return this.dataClient.send('create_salad', newSalad) as Observable<Salad>;
  }

  addToppings(saladId: string, toppings: ToppingDTO[]) {
    return this.dataClient.send('add_toppings_salad', {
      saladId,
      toppings,
    }) as Observable<Salad>;
  }

  setDressing(saladId: string, dressing: DressingDTO) {
    const salad = this.findSalad(saladId);
    if (dressing) {
      salad.dressing = dressing;
    }
    return salad;
  }
}
