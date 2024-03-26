import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsersService } from "./user.service";

@Module({
    imports:[PrismaModule],
    exports: [],
    controllers:[UsersController],
    providers:[UsersService],    
})
export class UsersModule {

}