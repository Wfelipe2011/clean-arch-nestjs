
export interface Create<Model> {
    create(...args: any[]): Promise<Model>;
}

export interface Read<Model> {
    read(...args: any[]): Promise<Model>;
}

export interface Update<Model> {
    update(...args: any[]): Promise<Model>;
}

export interface Delete<Model> {
    delete(...args: any[]): Promise<Model>;
}