import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { title } from 'process';
import { createBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    
    @Get()
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();

    }

    @Post()
    createBoard(
        @Body() createBoardDto: createBoardDto
    ): Board{
        return this.boardsService.createBoard(createBoardDto)

    }

}

