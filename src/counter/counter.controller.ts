import { CounterService } from './counter.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('counter')
export class CounterController {
  constructor(private CounterService: CounterService) {}

  @Get('/cnt')
  getCnt(): number {
    return this.CounterService.getCnt();
  }

  @Get('/cntArr')
  getCntArr(): Array<number> {
    return this.CounterService.getCntArr();
  }

  @Post('/up')
  upCnt(): void {
    this.CounterService.upCnt();
  }

  @Post('/push')
  pushCnt(): void {
    this.CounterService.pushCnt();
  }
}
