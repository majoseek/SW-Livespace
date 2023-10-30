import { fetch } from 'cross-fetch';
import { server } from 'src/msw/server';
import { vi, afterAll, afterEach, beforeAll } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

global.fetch = fetch;

beforeAll(() => server.listen({ onUnhandledRequest: `error` }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
expect.extend(matchers);

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});
