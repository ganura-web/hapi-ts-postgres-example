import { ServerRoute } from '@hapi/hapi';
import handlers from '../handlers';
import { joiValidationRules } from '../models/Contact';

const routes: ServerRoute[] = [
    {
        handler: handlers.home,
        method: 'GET',
        options: {
            description: 'Route'
        },
        path: '/'
    },
    {
        handler: handlers.contacts.getAll,
        method: 'GET',
        options: {
            description: 'Get contacts',
            tags: ['api', 'contacts']
        },
        path: '/api/contacts'
    },
    {
        handler: handlers.contacts.create,
        method: 'POST',
        options: {
            description: 'Get contacts',
            tags: ['api', 'contacts'],
            validate: {
                payload: joiValidationRules
            }
        },
        path: '/api/contacts'
    }
];
export default routes;
