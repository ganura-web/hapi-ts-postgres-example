import { Request, ResponseToolkit } from '@hapi/hapi';
import Contacts from '../models/Contact';
export default {
    create: async (request: Request, h: ResponseToolkit) => {
        const data = request.payload as Contacts;
        return await Contacts.create(data);
    },
    getAll: async () => {
        return await Contacts.findAll();
    }
};
