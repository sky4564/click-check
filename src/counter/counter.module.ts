import { Module } from '@nestjs/common';
import { CounterController } from './counter.controller';
import { CounterService } from './counter.service';

@Module({
  controllers: [CounterController],
  providers: [CounterService],
})
export class CounterModule {}

// nest g module counter
// nest g controller counter
// nest g service counter
