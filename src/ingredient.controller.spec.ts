import { Test, TestingModule } from '@nestjs/testing';
import { IngredientController } from './ingredient.controller';
import { DressingsService } from './services/dressings.service';

describe('IngredientController', () => {
  let controller: IngredientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientController],
      providers: [DressingsService],
    }).compile();

    controller = module.get<IngredientController>(IngredientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
