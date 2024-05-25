import { HttpResponse, delay, http } from 'msw';
import products from '../data/Products.json';

export const handlers = [
  http.get('/novelties', async () => {
    await delay(1200);
    const novelties = products.filter((el) => el.category === 'novelties');
    return HttpResponse.json(novelties);
  }),

  http.get('/releases', async () => {
    await delay(1200);
    const releases = products.filter((el) => el.category === 'releases');
    return HttpResponse.json(releases);
    return HttpResponse.json();
  }),
];
