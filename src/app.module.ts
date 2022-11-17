import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { UserRepository } from './core/repositories/user.repository';
import { UserMemoryRepository } from './infra/data/memory/user-memory.repository';
import { UserController } from './presentation/user.controller';

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
