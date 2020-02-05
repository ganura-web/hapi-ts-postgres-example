import { compose } from '@hapi/glue';
import handlebars from 'handlebars';
import config from './config';
import pluginManifest from './config/glue-manifest';
import initDb from './db';
import error from './extensions/error';
import routes from './routes';

const init = async (): Promise<void> => {
    const sequelize = initDb(config);
    const server = await compose(pluginManifest);
    server.route(routes);
    server.ext('onPreResponse', error);
    sequelize.sync();

    server.views({
        engines: {
            html: handlebars
        },
        layout: 'layouts/default',
        path: '../src/views',
        relativeTo: __dirname,
        isCached: false // should be set to true for production
    });
    await server.start();
};

init();
