export default {
    register: {
        plugins: [
            '@hapi/vision',
            '@hapi/inert',
            {
                options: {
                    grouping: 'tags',
                    info: {
                        title: 'Test Api Documentation',
                        version: '0.1.0'
                    }
                },
                plugin: 'hapi-swagger'
            }
        ]
    },
    server: {
        debug: { request: ['error'] },
        port: 8008
    }
};
