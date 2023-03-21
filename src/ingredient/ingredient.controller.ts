import { Controller, Get } from '@nestjs/common';
import { DressingsService } from 'src/services/dressings.service';
import { ToppingsService } from 'src/services/toppings.service';
import { Dressing } from './interfaces/dressing.interface';
import { Topping } from './interfaces/topping.interface';

@Controller()
export class IngredientController {
  constructor(
    private toppingsService: ToppingsService,
    private dressingsService: DressingsService,
  ) {}

  @Get('toppings')
  getToppings(): Promise<Topping[]> {
    return this.toppingsService.getAll();
  }

  @Get('dressings')
  getDressings(): Dressing[] {
    return this.dressingsService.getAll();
  }
}
