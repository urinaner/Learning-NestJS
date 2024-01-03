import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './boards-status.enum';
import { title } from 'process';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board>{
        return this.boardsService.createBoard(CreateBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id:number) : Promise<Board>{
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id:number): Promise<void>{
        return this.boardsService.deleteBoard(id);
    }
      


    // @Get()
    // getAllBoard(): Board[]{
    //     return this.boardsService.getAllBoards();

    // }

    // @Post()
    // @UsePipes(ValidationPipe) //핸들러레벨 유효성체크
    // createBoard(
    //     @Body() createBoardDto: createBoardDto
    // ): Board{
    //     return this.boardsService.createBoard(createBoardDto)

    // }

    // @Get('/:id')
    // getBoardById(@Param('id') id:string):Board{
    //     return this.boardsService.getBoardZById(id);

    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id:string): void{
    //     this.boardsService.deleteBoard
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id:string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    // ){
    //     return this.boardsService.updateBoardStatus(id, status);
    // }



}

