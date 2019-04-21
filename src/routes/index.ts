import { ServerRoute } from 'hapi';

const routes: ServerRoute[] = [
    {
        handler: () => 'Stuff',
        method: 'GET',
        options: {
            description: 'Route'
        },
        path: '/'
    }
];
export default routes;
