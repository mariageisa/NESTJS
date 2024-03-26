import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastrosModule } from './cadastro/cadastro.module';

@Module({
  imports: [CadastrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
