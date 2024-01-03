import { Injectable, NotFoundException } from '@nestjs/common';
import {BoardStatus } from './boards-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: BoardRepository,
    ){}
    

    async createBoard(createBoardDto: CreateBoardDto): Promise <Board>{
        const {title, description} = createBoardDto;

        const board = this.boardRepository.create({
            title,
            description,
            status: BoardStatus.PUBLIC
        })
        console.log("잘되네")

        await this.boardRepository.save(board);
        return this.boardRepository.createBoard(createBoardDto);
    }

    async deleteBoard(id: number): Promise<void>{
        const result = await this.boardRepository.delete(id);

        if(result.affected === 0){
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }

        console.log(result);
    }

    async getBoardById(id: number): Promise <Board>{
        const found = await this.boardRepository.findOne(id);
        
        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }


    // getAllBoards(): Board[]{
    //     return this.boards;
    // }

    // createBoard(createBoardDto: createBoardDto){
    //     const {title, description}  = createBoardDto
    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC 
    //     }

    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardZById(id: string): Board{
    //     const found = this.boards.find((board) => board.id === id);
    //     if(!found){
    //         throw new NotFoundException(`Can't find Board with id ${id}`); //빈값 유효성
    //     }
    //     return found;
    // }

    // deleteBoard(id: string): void{
    //     const found = this.getBoardZById(id); //유효성 체크 
    //     this.boards = this.boards.filter((board) => board.id!==found.id);
    // }

    // updateBoardStatus(id: string, status: BoardStatus): Board{
    //     const board = this.getBoardZById(id);
    //     board.status = status;
    //     return board;
    // }
}
