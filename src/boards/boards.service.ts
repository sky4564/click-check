import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [1, 2, 3, 4];

  getAllBoards() {
    return this.boards;
  }
}
