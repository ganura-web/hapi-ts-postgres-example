import * as firebase from 'firebase/app';
import 'firebase/database';
import handlebars from 'handlebars';
import * as hapi from 'hapi';
import vision from 'vision';
import routes from './routes';

import config from './config';

const hapiOptions: hapi.ServerOptions = {
    debug: { request: ['error'] },
    port: 8008
};

const server = new hapi.Server(hapiOptions);

const init = async () => {
    await server.register(vision);
    server.route(routes);

    server.views({
        engines: {
            html: handlebars
        },
        layout: './views/layouts',
        path: './views',
        relativeTo: __dirname
    });
    firebase.initializeApp(config);
    await server.start();
};

init().then(() => {
    console.log('Server started'); // tslint:disable-line
});
