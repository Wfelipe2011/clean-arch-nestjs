import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/core/domain/entities/user.entity";
import { RepositoryMemory } from "../base/repository-memory";

@Injectable()
export class UserMemoryRepository extends RepositoryMemory<UserEntity> { }