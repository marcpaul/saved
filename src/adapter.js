import { RethinkDBAdapter } from 'js-data-rethinkdb';

// Create an instance of RethinkDBAdapter
export default const adapter = new RethinkDBAdapter({
  rOpts: {
    host: process.env.DB_HOST,
    port: process.env.DB_POST,
    db: process.env.DB_DATABASE,
    authKey: process.env.DB_AUTH_KEY
  }
});
