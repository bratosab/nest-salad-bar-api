import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataModule } from '../data/data.module';
import { DressingsService } from '../services/dressings.service';
import { ToppingsService } from '../services/toppings.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { SaladController } from './salad.controller';
import { SaladService } from './salad.service';

const pipeConfiguration = {
  throwError: true,
};
@Module({
  controllers: [SaladController],
  providers: [
    SaladService,
    ToppingsService,
    DressingsService,
    {
      provide: 'PIPE_CONFIG',
      useValue: pipeConfiguration,
    },
  ],
  imports: [DataModule, ConfigModule],
})
export class SaladModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SaladController);
  }
}
