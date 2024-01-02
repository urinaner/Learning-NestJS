import { IsNotEmpty } from "class-validator";

export class CreateBoardDto{
    @IsNotEmpty() //유효성체크
    title: string;

    @IsNotEmpty() //유효성체크
    description: string;
}