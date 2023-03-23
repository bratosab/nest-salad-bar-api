import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Dressing } from 'src/interfaces/dressing.interface';
import { CreateDressingDTO } from 'src/salad/dto/create-dressing.dto';

@Injectable()
export class DressingsService {
  constructor(@Inject('DATA') private readonly dataClient: ClientProxy) {}

  getAll(): Observable<Dressing[]> {
    return this.dataClient.send('get_dressings', {}) as Observable<Dressing[]>;
  }

  add(newDressing: CreateDressingDTO): Observable<Dressing> {
    return this.dataClient.send(
      'create_dressing',
      newDressing,
    ) as Observable<Dressing>;
  }
}
