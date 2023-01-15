import {Server, createServer, Registry} from 'miragejs';
import {AnyFactories, AnyModels, AnyResponse} from 'miragejs/-types';
import {RouteHandler} from 'miragejs/server';
import {BASE_URL} from '../api';

const personalCare = require('./image/personal-care.png');
const categorie1 = require('./categorie-1.json');

const subCategorieShampoo = require('./subcategorie-Shampoo.json');
const subCategorieHandwash = require('./subcategorie-Handwash.json');

const subCategories = {
  'shampo--o': subCategorieShampoo,
  'hand-wash': subCategorieHandwash,
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

  return subCategories[id];
};

export const getImage = (url: string) => {
  const id = url.toString().includes('/')
    ? url.toString().split('/').pop()
    : '';

  switch (id) {
    case 'personal-care':
      return personalCare;
    default:
      return personalCare;
  }
};
