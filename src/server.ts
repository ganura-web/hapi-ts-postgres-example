import handlebars from 'handlebars';
import * as hapi from 'hapi';
import vision from 'vision';
const hapiOptions: hapi.ServerOptions = {
    debug: { request: ['error'] },
    port: 8008
};

const server = new hapi.Server(hapiOptions);

const init = async () => {
    await server.register(vision);

    server.views({
        engines: {
            html: handlebars
        },
        path: 'templates',
        relativeTo: __dirname
    });
    await server.start();
};

init().then(() => {
    console.log('Server started'); // tslint-disable
});
