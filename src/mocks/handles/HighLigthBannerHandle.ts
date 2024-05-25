import { HttpResponse, delay, http } from 'msw';
import HighLigths from '../data/HighLigths.json';

export const handlers = [
  http.get('/highlights', async () => {
    await delay(1200);
    return HttpResponse.json(HighLigths, { status: 200 });
  }),
];
