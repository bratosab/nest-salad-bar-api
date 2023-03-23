import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DressingsService } from 'src/services/dressings.service';
import { ToppingsService } from 'src/services/toppings.service';
import { Dressing } from './interfaces/dressing.interface';
import { Topping } from './interfaces/topping.interface';
import { CreateDressingDTO } from './salad/dto/create-dressing.dto';
import { CreateToppingDTO } from './salad/dto/create-topping.dto';

@Controller()
export class IngredientController {
  constructor(
    private toppingsService: ToppingsService,
    private dressingsService: DressingsService,
  ) {}

  @Get('toppings')
  getToppings(): Observable<Topping[]> {
    return this.toppingsService.getAll();
  }

  @Post('/topping')
  createTopping(@Body() newTopping: CreateToppingDTO): Observable<Topping> {
    return this.toppingsService.add(newTopping);
  }

  @Get('dressings')
  getDressings(): Observable<Dressing[]> {
    return this.dressingsService.getAll();
  }

  @Post('/dressing')
  createDressing(@Body() newDressing: CreateDressingDTO): Observable<Dressing> {
    return this.dressingsService.add(newDressing);
  }
}
