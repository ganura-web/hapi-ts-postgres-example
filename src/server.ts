import * as hapi from 'hapi';

const server = new hapi.Server();

const init = async () => {
  await server.start();
};

init().then(() => {
  console.log('Server started');
});
