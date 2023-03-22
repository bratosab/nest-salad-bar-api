import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { IngredientController } from './ingredient.controller';
import { ToppingsService } from './services/toppings.service';
import { DressingsService } from './services/dressings.service';
import { SaladModule } from './salad/salad.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    SaladModule,
    RouterModule.register([
      {
        path: 'salad',
        module: SaladModule,
      },
    ]),
  ],
  controllers: [AppController, IngredientController],
  providers: [AppService, ToppingsService, DressingsService],
})
export class AppModule {}
