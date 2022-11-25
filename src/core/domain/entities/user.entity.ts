import { UserCreateDto } from "src/shared/dto/user-create.dto";
import { uuidAdapter } from "src/infra/adapter/uuid.adapter";

export class UserEntity {
    public id: string;
    public name: string;
    private password: string;
    public email: string;

    constructor(input: UserCreateDto) {
        this.id = input.id || uuidAdapter.generate();
        this.name = input.name;
        this.password = input.password;
        this.email = input.email;
    }

    public getPassword(): string {
        return this.password;
    }

}