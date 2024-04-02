import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] { 
    return this.boardsService.getAllBoards();
  }
}
