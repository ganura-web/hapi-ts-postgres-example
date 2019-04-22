import { compose } from '@hapi/glue';
import handlebars from 'handlebars';
import config from './config';
import pluginManifest from './config/glue-manifest';
import initDb from './db';
import error from './extensions/error';
import routes from './routes';

const init = async () => {
    const sequelize = initDb(config);
    const server = await compose(pluginManifest);
    server.route(routes);
    server.ext('onPreResponse', error);
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
