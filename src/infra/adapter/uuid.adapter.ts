import { Uuid } from 'src/shared/interface/uuid.interface';
import { v4 as uuidv4 } from 'uuid';

class UuidAdapter implements Uuid {

    generate(): string {
        return uuidv4();
    }
}

export const uuidAdapter = new UuidAdapter();

