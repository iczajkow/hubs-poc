import { rest } from 'msw';
import { docDataMock } from './docs-data.mock';

export const handlers = [
  rest.get('/docs', (req, res, ctx) => {
    const from = Number(req.url.searchParams.get('from')) ?? 0;
    const to = Number(req.url.searchParams.get('to')) ?? 10;
    const allDocs = Object.values(docDataMock);
    const docs = allDocs.slice(from, to);

    return res(ctx.json(docs));
  }),

  rest.put('/docs', async (req, res, ctx) => {
    const doc = await req.json();
    docDataMock[doc.id] = doc;

    return res(ctx.json(docDataMock[doc.id]));
  }),
];
