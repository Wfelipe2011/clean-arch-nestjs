import { Module } from '@nestjs/common';
import { UserService } from './application/service/user.service';
import { UserRepository } from './core/repositories/user.repository';
import { UserMemoryRepository } from './infra/database/memory/user-memory.repository';
import { UserController } from './infra/presentation/user.controller';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useClass: UserMemoryRepository,
    },
    UserService
  ],
})
export class AppModule { }
