import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { User } from "../user/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo]),
        TypeOrmModule.forFeature([User])
    ],
    controllers: [TodoController],
    providers: [TodoService],
})
export class TodoModule {}