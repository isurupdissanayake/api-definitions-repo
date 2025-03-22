const SwaggerParser = require('swagger-parser');

async function validateOpenAPISpec() {
    try {
        const api = await SwaggerParser.validate('src/definitions/v1/index.yaml');
        console.log('API is valid. Details:', api);
    } catch (err) {
        console.error('API validation error:', err.message);
    }
}

validateOpenAPISpec();
