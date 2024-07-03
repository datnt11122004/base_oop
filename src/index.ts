import Fastify from 'fastify';

const app = Fastify({ logger: true });

app.register(require('./route/UserRoute'));

app.listen({ port: 3000 }, (err) => {
    if (err) throw err;
    console.log("Server listening on http://localhost:3000");
});
