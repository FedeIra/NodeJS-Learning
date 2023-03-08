import { app } from './app.js';
import { connect as db } from './db/database.js';
import config from './config/config.js';

db();

const PORT = config.port || 3000;

const server = app.listen(PORT, () =>
  console.log(`Server connected to port ${PORT}.`)
);

process.on('unhandledRejection', (err) => {
  console.error(`An error occurred with server connection: ${err.message}`);
  server.close(() => process.exit(1));
});
