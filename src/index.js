import Fastify from 'fastify';
import firstRoute from './our-first-route.js';
import dbConnector from './our-db-connector.js';

// Inside of Fastify object you can write configuration for app
const fastify = Fastify({
  logger: true, // Enable logger
});

fastify.register(dbConnector);
fastify.register(firstRoute);

// Run web server
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
