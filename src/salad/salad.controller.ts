import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Dressing } from 'src/interfaces/dressing.interface';
import { Topping } from 'src/interfaces/topping.interface';
import { CreateSaladDTO } from './dto/create-salad.dto';
import { DressingDTO } from './dto/dressing.dto';
import { ToppingDTO } from './dto/topping.dto';
import { Salad } from './interfaces/salad.interface';
import { SaladService } from './salad.service';

@Controller()
export class SaladController {
  constructor(private saladService: SaladService) {}

  @Get()
  getAll(): Salad[] {
    return this.saladService.getAll();
  }

  @Post()
  makeSalad(@Body() salad: CreateSaladDTO): Salad {
    return this.saladService.createSalad(salad);
  }

  @Post(':id/toppings')
  addToppings(
    @Param('id', ParseUUIDPipe) saladId: string,
    @Body(
      new ParseArrayPipe({
        items: ToppingDTO,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    toppings: ToppingDTO[],
  ) {
    return this.saladService.addToppings(saladId, toppings);
  }

  @Post(':id/dressing')
  setDressing(
    @Param('id', ParseUUIDPipe) saladId: string,
    @Body() dressing: DressingDTO,
  ) {
    return this.saladService.setDressing(saladId, dressing);
  }
}
