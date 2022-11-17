export abstract class Mapper<Dto, Entity> {
    abstract mapFrom(param: Dto): Entity;
    abstract mapTo(param: Entity): Dto;
}
