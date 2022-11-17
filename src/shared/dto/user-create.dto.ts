import { UserEntity } from "src/core/domain/entities/user.entity";

export class UserCreateDto {
    id?: string;
    name: string;
    email: string;
    password: string;

    constructor(user: UserEntity) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.getPassword();
    }

}