import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";
import { BoardStatus } from "./boards-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";


@EntityRepository(Board)
export class BoardRepository extends Repository<Board>{

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board>{
        const {title, description} = createBoardDto;
        console.log("ㅎㅇ")
        const board = this.create({
            title,
            description,
            status: BoardStatus.PUBLIC,
        })
        

        await this.save(board);
        return board;
    }

}