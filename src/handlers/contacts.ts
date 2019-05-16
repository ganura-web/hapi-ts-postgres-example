import Boom from '@hapi/boom';
import { Request } from '@hapi/hapi';
import Contacts from '../models/Contact';

export default {
    create: async (request: Request) => {
        const data = request.payload as Contacts;
        try {
            return await Contacts.create(data);
        } catch (e) {
            throw Boom.boomify(e);
        }
    },
    getAll: async () => {
        return await Contacts.findAll();
    }
};
