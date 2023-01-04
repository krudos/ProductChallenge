import {Server, createServer} from 'miragejs';
import {BASE_URL} from '../api';

const categorie1 = require('./categorie-1.json');
const mocks = [categorie1];

export const runMirage = (logging: boolean = true) => {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    routes() {
      mocks.map(mock => mockEndpoints(this, mock));
    },
  });
  window.server.logging = logging;
};

const mockEndpoints = (server: Server, mock: any) => {
  const {type, endpoint, data} = mock;

  switch (type) {
    case 'GET':
      server.get(`${BASE_URL}${endpoint}`, () => {
        return data;
      });
      break;
  }
};
