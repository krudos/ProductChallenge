import {Server, createServer} from 'miragejs';

const BASE_URL = 'http://localhost:3000';

export const runMirage = () => {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    routes() {
      this.namespace = 'api';

      this.get('/users', () => {
        return {
          users: [
            {id: 1, name: 'Bob'},
            {id: 2, name: 'Alice'},
          ],
        };
      });
    },
  });
};
