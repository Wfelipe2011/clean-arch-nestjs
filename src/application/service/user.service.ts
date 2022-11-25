import { Injectable } from "@nestjs/common";
import { Create, Read } from "src/core/base/use-case";
import { UserEntity } from "src/core/domain/entities/user.entity";
import { UserRepository } from "src/core/repositories/user.repository";
import { UserCreateDto } from "src/shared/dto/user-create.dto";
import { UserCreatedDto } from "src/shared/dto/user-created.dto";

@Injectable()
export class UserService implements Create<UserCreatedDto>, Read<UserCreatedDto[]> {

    constructor(private repository: UserRepository) { }

    async create(userDto: UserCreateDto): Promise<UserCreatedDto> {
        const user = new UserEntity(userDto);
        const userCreated = await this.repository.create(user);
        return new UserCreatedDto(userCreated);
    }

    async read(): Promise<UserCreatedDto[]> {
        const users = await this.repository.getAll();
        return users.map(user => new UserCreatedDto(user));
    }

}