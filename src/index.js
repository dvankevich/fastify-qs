import Fastify from 'fastify';
import firstRoute from './our-first-route.js';

// Inside of Fastify object you can write configuration for app
const fastify = Fastify({
  logger: true, // Enable logger
});

fastify.register(firstRoute);

fastify.get('/about', async function handler(request, reply) {
  return { info: 'Super puper information is saved here' };
});

// Run web server
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
