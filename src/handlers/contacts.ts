import Boom from '@hapi/boom';
import { Request, ResponseToolkit } from '@hapi/hapi';
import Contacts from '../models/Contact';

export default {
    create: async (request: Request, h: ResponseToolkit) => {
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
