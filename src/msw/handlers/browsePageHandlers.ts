import { rest } from 'msw';
import { API_BASE_URL } from '@/utils/constants';
import { peopleMocks } from '../mocks/browsePageMocks';

export const browsePageHandlers = [
    rest.get(`${API_BASE_URL}/people`, async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(peopleMocks));
    }),
];
