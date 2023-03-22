import { Injectable } from '@nestjs/common';
import { Dressing } from 'src/interfaces/dressing.interface';

@Injectable()
export class DressingsService {
  getAll(): Dressing[] {
    return [
      { name: 'Ranch', price: 0 },
      { name: 'Cesar', price: 0.5 },
    ];
  }
}
