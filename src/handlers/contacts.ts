import Boom from '@hapi/boom';
import { Request } from '@hapi/hapi';
import Contacts from '../models/Contact';

export default {
    create: async (request: Request): Promise<Contacts> => {
        const data = request.payload as Contacts;
        try {
            return await Contacts.create(data);
        } catch (e) {
            throw Boom.boomify(e);
        }
    },
    getAll: async (): Promise<Contacts[]> => {
        return await Contacts.findAll();
    }
};
