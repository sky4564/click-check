import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { CounterModule } from './counter/counter.module';

@Module({
  imports: [BoardsModule, CounterModule],
})
export class AppModule {}
