import {Server, createServer, Registry} from 'miragejs';
import {AnyFactories, AnyModels, AnyResponse} from 'miragejs/-types';
import {RouteHandler} from 'miragejs/server';
import {BASE_URL} from '../api';

const categorie1 = require('./categorie-1.json');
const subCategorieShampoo = require('./subcategorie-Shampoo.json');
const subCategorieHandwash = require('./subcategorie-Handwash.json');
const subCategorieFragance = require('./subcategorie-Fragance.json');

const subCategories = {
  'shampo--o': subCategorieShampoo,
  'hand-wash': subCategorieHandwash,
  fragances: subCategorieFragance,
};

const mocks = [categorie1];

const delay = {timing: 400};
export const runMirage = (logging: boolean = true) => {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    routes() {
      mocks.map(mock => mockEndpoints(this, mock));

      this.get(
        BASE_URL + '/product/sub-category/:id',
        subCategoryEndpoint,
        delay,
      );
    },
  });
  window.server.logging = logging;
};

const mockEndpoints = (server: Server, mock: any) => {
  const {type, endpoint, data} = mock;

  switch (type) {
    case 'GET':
      server.get(
        `${BASE_URL}${endpoint}`,
        () => {
          return data;
        },
        delay,
      );
      break;
  }
};

const subCategoryEndpoint: RouteHandler<
  Registry<AnyModels, AnyFactories>,
  AnyResponse
> = (_, request) => {
  const {id} = request.params;
  if (id === 'all') {
    const allProducts = Object.values(subCategories).reduce(
      (acc, subCategory) => [...acc, ...subCategory.data.items],
      [],
    );

    return allProducts;
  }

  return subCategories[id].data.items;
};

export const getImage = (url: string) => {
  const id = url.toString().includes('/')
    ? url.toString().split('/').pop()
    : url.toString();

  switch (id) {
    case '100':
      return require('./image/100.png');
    case '101':
      return require('./image/101.png');
    case '102':
      return require('./image/102.png');
    case '200':
      return require('./image/200.png');
    case '201':
      return require('./image/201.png');
    case '202':
      return require('./image/202.png');

    case '300':
      return require('./image/300.png');
    case '301':
      return require('./image/301.png');
    case '302':
      return require('./image/302.png');

    case 'personal-care':
    default:
      return require('./image/personal-care.png');
  }
};
