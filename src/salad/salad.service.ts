import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Topping } from 'src/interfaces/topping.interface';
import { CreateSaladDTO } from './dto/create-salad.dto';
import { DressingDTO } from './dto/dressing.dto';
import { ToppingDTO } from './dto/topping.dto';
import { Salad } from './interfaces/salad.interface';

@Injectable()
export class SaladService {
  private inMemorySalads: Salad[];

  constructor() {
    this.inMemorySalads = [];
  }

  private findSalad(saladId: string): Salad {
    return this.inMemorySalads.find((s) => s.id === saladId);
  }

  getAll(): Salad[] {
    return this.inMemorySalads;
  }

  createSalad(salad: CreateSaladDTO): Salad {
    const newSalad = { ...salad, id: randomUUID(), date: new Date() };
    this.inMemorySalads.push(newSalad);
    return newSalad;
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
    this.findSalad(saladId).dressing = dressing;
  }
}
