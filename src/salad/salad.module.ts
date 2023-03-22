import { Module } from '@nestjs/common';
import { SaladController } from './salad.controller';
import { SaladService } from './salad.service';

@Module({
  controllers: [SaladController],
  providers: [SaladService],
})
export class SaladModule {}
