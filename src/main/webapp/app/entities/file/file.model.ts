import { Location } from '../location';
import { Owner } from '../owner';
export class File {
    constructor(
        public id?: number,
        public name?: string,
        public createdDate?: any,
        public location?: Location,
        public owner?: Owner,
    ) {
    }
}
