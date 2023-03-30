import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

const getPorts = () => {};

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        name: 'DATA',
        useFactory: (config: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            port: config.get('DATA_MS_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class DataModule {}
