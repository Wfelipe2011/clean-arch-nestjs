import { Injectable } from "@nestjs/common";
import { Repository } from "src/core/base/repository";

@Injectable()
export class RepositoryMemory<TEntity extends { id: string }> extends Repository<TEntity> {
    protected readonly items: TEntity[];

    constructor() {
        super();
        this.items = [];
    }

    async create(data: TEntity): Promise<TEntity> {
        this.items.push(data);
        return data;
    }

    async update(id: string, data: TEntity): Promise<TEntity> {
        const index = this.getIndexById(id);
        this.items[index] = data;
        return data;
    }

    async patch(id: string, data: Partial<TEntity>): Promise<TEntity> {
        const index = this.getIndexById(id);
        this.items[index] = { ...this.items[index], ...data };
        return this.items[index];
    }


    async getById(id: string): Promise<TEntity> {
        return this.items.find(item => item.id === id);
    }


    async getAll(): Promise<TEntity[]> {
        return this.items;
    }


    async getOne(filter: Partial<TEntity>): Promise<TEntity> {
        return this.items.find(item => item.id === filter.id);
    }


    async getMany(filter: Partial<TEntity>): Promise<TEntity[]> {
        return this.items.filter(item => item.id === filter.id);
    }


    async delete(id: string): Promise<void> {
        const index = this.getIndexById(id);
        this.items.splice(index, 1);
    }

    private getIndexById(id: string) {
        return this.items.findIndex(item => item.id === id);
    }
}