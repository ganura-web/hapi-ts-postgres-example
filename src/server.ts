import handlebars from 'handlebars';
import * as hapi from 'hapi';
import vision from 'vision';
import config from './config';
import initDb from './db';
import routes from './routes';

const hapiOptions: hapi.ServerOptions = {
    debug: { request: ['error'] },
    port: 8008
};

const server = new hapi.Server(hapiOptions);

const init = async () => {
    const sequelize = initDb(config);
    await server.register(vision);
    server.route(routes);
    sequelize.sync();

    server.views({
        engines: {
            html: handlebars
        },
        layout: './views/layouts',
        path: './views',
        relativeTo: __dirname
    });
    await server.start();
};

init();
