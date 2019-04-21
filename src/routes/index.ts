import { ServerRoute } from 'hapi';
import handlers from '../handlers';

const routes: ServerRoute[] = [
    {
        handler: handlers.home,
        method: 'GET',
        options: {
            description: 'Route'
        },
        path: '/'
    }
];
export default routes;
