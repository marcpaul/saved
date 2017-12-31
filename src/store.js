// Use Container instead of DataStore on the server
import { Container } from 'js-data';
import adapter from './adapter';

// Create a store to hold your Mappers
export default const store = new Container();

// Mappers in "store" will use the RethinkDB adapter by default
store.registerAdapter('rethinkdb', adapter, { default: true });

store.defineMapper('post');
