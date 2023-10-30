import { extractIdFromUrl } from '@/utils/helpers';

describe('Helpers utils', () => {
    test('Extracting id from url', () => {
        expect(extractIdFromUrl('https://swapi.dev/api/people/3')).toEqual(3);
        expect(extractIdFromUrl('https://swapi.dev/api/vehicles/1')).toEqual(1);
        expect(extractIdFromUrl('https://swapi.dev/api/planets/2')).toEqual(2);
        expect(extractIdFromUrl('http://localhost:5173/7')).toEqual(7);
        expect(extractIdFromUrl('http://localhost:5173/vehicles/6')).toEqual(6);
        expect(extractIdFromUrl('http://localhost:5173/planets/5')).toEqual(5);
        expect(extractIdFromUrl('http://localhost:5173/planets')).toEqual(0);
    });
});
