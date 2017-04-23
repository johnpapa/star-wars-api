module.exports = function (context, request) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Bindings' , context.bindings);
    context.log('Request', request);
    let response = { };

    const droids = [
        { id: 1, name: 'BB8' },
        { id: 2, name: 'K2S0' },
        { id: 3, name: 'C3PO' },
        { id: 4, name: 'R2D2' }
    ];

    if (request.query && request.query.id) {
        const id = parseInt(request.query.id);
        const droid = droids.filter(d => d.id === id);
        response.body = droid
    }
    else {
        response.body = droids
    }
    context.done(null, response);
};
