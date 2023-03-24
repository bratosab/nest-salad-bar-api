import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { DataModule } from '../data/data.module';
import { Salad } from './interfaces/salad.interface';
import { SaladController } from './salad.controller';
import { SaladService } from './salad.service';
const pipeConfiguration = {
  throwError: true,
};
const saladsMock: Salad[] = [
  {
    id: '10b41390-a33e-4828-8384-5b1c65879400',
    username: 'tom',
    date: new Date('2023-03-22T20:40:19.000Z'),
  },
  {
    id: '19d38d5a-a2fd-4098-9046-3c42c1f4cd46',
    username: 'tom',
    date: new Date('2023-03-23T08:26:42.000Z'),
  },
];

describe('SaladController', () => {
  let controller: SaladController;
  let service: SaladService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaladController],
      providers: [
        {
          provide: SaladService,
          useValue: {
            getAll: () => of(saladsMock),
          },
        },
        {
          provide: 'PIPE_CONFIG',
          useValue: pipeConfiguration,
        },
      ],
      imports: [],
    }).compile();

    controller = module.get<SaladController>(SaladController);
    service = module.get<SaladService>(SaladController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('Should return an array of Salads', () => {
      // jest.spyOn(service, 'getAll').mockImplementation(() => of(salads));

      controller.getAll().subscribe((result) => {
        expect(result).toBe(saladsMock);
      });
    });
  });
});
