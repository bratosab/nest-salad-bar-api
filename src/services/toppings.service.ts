import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { Topping } from 'src/ingredient/interfaces/topping.interface';

@Injectable()
export class ToppingsService {
  async getAll(): Promise<Topping[]> {
    const toppingsFile = await readFile('./src/mocks/toppings.json', 'utf-8');

    return JSON.parse(toppingsFile) as Topping[];
  }
}
