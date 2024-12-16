import { Module } from '@nestjs/common';
import { CounterGateway } from './counter.gateway';

@Module({
  providers: [CounterGateway],
})
export class WebsocketsModule {}
