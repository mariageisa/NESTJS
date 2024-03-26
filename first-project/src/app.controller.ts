import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): string {
    return this.appService.getHello();
  }
  @Post()
  setHello() : string {
    return 'AQUI ESTA MEU POST'
  }
}

@Controller('users')
export class AppControllerUsers {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): string {
    return this.appService.getUser();
  }

  @Post()
  setUser(): string {
    return 'AQUI ESTA MEU POST DE USUÁRIO'
  }
}
