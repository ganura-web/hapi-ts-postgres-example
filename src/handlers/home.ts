import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import Contacts from '../models/Contact';
import contactMethods from './contacts';

const create = contactMethods.create;

async function getView(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const contacts = await Contacts.findAll();
    return h.view('app', { contacts });
}

async function createContact(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    await create(request);

    return getView(request, h);
}

export default {
    getView,
    createContact
};
