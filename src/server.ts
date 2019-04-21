import * as hapi from 'hapi';

const hapiOptions: hapi.ServerOptions = {
    port: 8008
};

const server = new hapi.Server(hapiOptions);

const init = async () => {
    await server.start();
};

init().then(() => {
    console.log('Server started');
});
