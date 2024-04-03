import { CounterService } from './counter.service';
import { Controller, Get } from '@nestjs/common';

@Controller('counter')
export class CounterController {
  constructor(private CounterService: CounterService) {}

  @Get('/')
  getCnt(): number {
    return this.CounterService.getCnt();
  }
}
