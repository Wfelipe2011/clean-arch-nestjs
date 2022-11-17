/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test } from '@nestjs/testing';
import { UserRepository } from "src/core/repositories/user.repository";
import { UserService } from "../application/user.service";
import { UserMemoryRepository } from "../infra/data/memory/user-memory.repository";

describe("UserService tradicional", () => {
    const userService = new UserService(new UserMemoryRepository());

    test("Deve criar um user", async () => {
        const user = await userService.create({
            name: "John Doe",
            email: "a@a.gmail.com",
            password: "123456"
        });

        expect(user).toBeDefined();
        expect(user.id).toBeDefined();
        expect(user.name).toBe("John Doe");
    });

    test("Deve listar todos os users", async () => {
        const users = await userService.read();

        expect(users).toBeDefined();
        expect(users.length).toBe(1);
    });
})

describe("UserService com Injeção de Dependência NestJs", () => {
    let userService: UserService;
    let userRepository: UserRepository;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: UserRepository,
                    useClass: UserMemoryRepository
                }
            ]
        }).compile();
        userService = moduleRef.get<UserService>(UserService);
        userRepository = moduleRef.get<UserRepository>(UserRepository);
    });

    test("Deve criar um user", async () => {
        const user = await userService.create({
            name: "John Doe",
            email: "a@a.gmail.com",
            password: "123456"
        });

        expect(user).toBeDefined();
        expect(user.id).toBeDefined();
        expect(user.name).toBe("John Doe");
    });

    test("Deve listar todos os users", async () => {
        const users = await userService.read();
        expect(users).toBeDefined();
        expect(users.length).toBe(1);
    });

});