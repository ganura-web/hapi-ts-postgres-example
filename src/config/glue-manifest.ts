export default {
    server: {
        port: 8008,
        debug: { request: ['error'] }
    },
    register: {
        plugins: [
            '@hapi/vision',
            '@hapi/inert',
            {
                plugin: 'hapi-swagger',
                options: {
                    info: {
                        title: 'Test Api Documentation',
                        version: '0.1.0'
                    }
                }
            }
        ]
    }
};
