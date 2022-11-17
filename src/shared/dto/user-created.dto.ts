import { UserEntity } from "src/core/domain/entities/user.entity";

export class UserCreatedDto {
    id: string;
    name: string;

    constructor(user: UserEntity) {
        this.id = user.id;
        this.name = user.name;
    }
}