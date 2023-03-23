import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DATA',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class DataModule {}
