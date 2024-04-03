import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
  private cnt: number = 0;
  private cntArr: number[] = [];

  getCnt(): number {
    return this.cnt;
  }
  getCntArr(): Array<number> {
    return this.cntArr;
  }

  upCnt(): void {
    this.cnt += 1;
    console.log(this.cnt);
  }
  pushCnt(): void {
    this.cntArr.push(this.cnt);
    this.cnt = 0;
  }
}
