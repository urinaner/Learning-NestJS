import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "./boards-status.enum";

@Entity()
export class Board extends BaseEntity{
    @PrimaryGeneratedColumn() //기본
    id: number;

    @Column()
    title: string;

    @Column()
    description : string;

    @Column()
    status: BoardStatus;
}