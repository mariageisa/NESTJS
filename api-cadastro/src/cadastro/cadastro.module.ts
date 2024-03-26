import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { CadastrosCrontroller } from "./cadastro.controller";

@Module({
    imports: [CadastrosCrontroller],
    exports: [],
    controllers: [CadastrosCrontroller],
    providers: [], 

})

export class CadastrosModule {

}