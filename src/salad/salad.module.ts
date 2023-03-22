import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
} from '@nestjs/common';
import { DressingsService } from 'src/services/dressings.service';
import { ToppingsService } from 'src/services/toppings.service';
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
})
export class SaladModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SaladController);
  }
}
