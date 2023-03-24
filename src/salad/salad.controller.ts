import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  ParseUUIDPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggingInterceptor } from 'src/core/logging.interceptor';
import { CreateSaladDTO } from './dto/create-salad.dto';
import { DressingDTO } from './dto/dressing.dto';
import { ToppingDTO } from './dto/topping.dto';
import { Salad } from './interfaces/salad.interface';
import { DressingPipe } from './pipes/dressing.pipe';
import { ToppingsPipe } from './pipes/toppings.pipe';
import { SaladService } from './salad.service';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class SaladController {
  constructor(private saladService: SaladService) {}

  @Get()
  getAll(): Observable<Salad[]> {
    return this.saladService.getAll();
  }

  @Post()
  makeSalad(@Body() salad: CreateSaladDTO): Observable<Salad> {
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
      ToppingsPipe,
    )
    toppings: ToppingDTO[],
  ) {
    return this.saladService.addToppings(saladId, toppings);
  }

  @Post(':id/dressing')
  setDressing(
    @Param('id', ParseUUIDPipe) saladId: string,
    @Body(DressingPipe) dressing: DressingDTO,
  ) {
    return this.saladService.setDressing(saladId, dressing);
  }
}
