import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { IngredientController } from './ingredient/ingredient.controller';
import { ToppingsService } from './services/toppings.service';
import { DressingsService } from './services/dressings.service';

@Module({
  imports: [],
  controllers: [AppController, IngredientController],
  providers: [AppService, ToppingsService, DressingsService],
})
export class AppModule {}
