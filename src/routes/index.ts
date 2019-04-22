import { ServerRoute } from '@hapi/hapi';
import handlers from '../handlers';

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
            tags: ['API']
        },
        path: '/api/contacts'
    }
    // ,
    // {
    //     handler: handlers.contacts,
    //     method: 'POST',
    //     options: {
    //         description: 'Get contacts',
    //         tags: ['API']
    //     },
    //     path: '/api/contacts'
    // }
];
export default routes;
