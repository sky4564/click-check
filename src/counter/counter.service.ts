import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
  private cnt: number = 0;
  getCnt(): number {
    return this.cnt;
  }
}
