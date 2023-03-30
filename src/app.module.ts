import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { IngredientController } from './ingredient.controller';
import { ToppingsService } from './services/toppings.service';
import { DressingsService } from './services/dressings.service';
import { SaladModule } from './salad/salad.module';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { DataModule } from './data/data.module';
import { AuthGuard } from './Core/auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SaladModule,
    RouterModule.register([
      {
        path: 'salad',
        module: SaladModule,
      },
    ]),
    DataModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, IngredientController],
  providers: [
    AppService,
    ToppingsService,
    DressingsService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
