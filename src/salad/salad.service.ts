import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import { Observable } from 'rxjs';
import { Topping } from 'src/interfaces/topping.interface';
import { CreateSaladDTO } from './dto/create-salad.dto';
import { DressingDTO } from './dto/dressing.dto';
import { ToppingDTO } from './dto/topping.dto';
import { Salad } from './interfaces/salad.interface';

@Injectable()
export class SaladService {
  private inMemorySalads: Salad[];

  constructor(@Inject('DATA') private readonly dataClient: ClientProxy) {
    this.inMemorySalads = [];
    // FIXME: Mock
    // this.inMemorySalads = [
    //   {
    //     username: 'tom',
    //     id: 'e299ea42-de92-4188-9d69-66b0c5b12b17',
    //     date: new Date(),
    //   },
    // ];
  }

  private findSalad(saladId: string): Salad {
    return this.inMemorySalads.find((s) => s.id === saladId);
  }

  getAll(): Salad[] {
    return this.inMemorySalads;
  }

  createSalad(salad: CreateSaladDTO): Observable<Salad> {
    const newSalad = { ...salad, id: randomUUID(), date: new Date() };

    return this.dataClient.send('create_salade', newSalad) as Observable<Salad>;
  }

  addToppings(saladId: string, toppings: ToppingDTO[]) {
    const salad = this.findSalad(saladId);
    if (salad?.toppings?.length) {
      salad.toppings.push(...toppings);
    } else {
      salad.toppings = toppings;
    }
    return salad;
  }

  setDressing(saladId: string, dressing: DressingDTO) {
    const salad = this.findSalad(saladId);
    if (dressing) {
      salad.dressing = dressing;
    }
    return salad;
  }
}
