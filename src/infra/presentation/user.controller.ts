import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "src/application/service/user.service";
import { UserCreateDto } from "src/shared/dto/user-create.dto";
import { UserCreatedDto } from "src/shared/dto/user-created.dto";

@Controller("/users")
export class UserController {

    constructor(private userService: UserService) { }

    @Post()
    public async create(@Body() user: UserCreateDto): Promise<UserCreatedDto> {
        return await this.userService.create(user);
    }

    @Get()
    public async findAll(): Promise<UserCreatedDto[]> {
        return await this.userService.read()
    }
}