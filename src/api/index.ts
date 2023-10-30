import {
    CharacterDetailsResponse,
    ListResponse,
    PlanetDetailsResponse,
    VehicleDetailsResponse,
} from '@/types';
import { API_BASE_URL, API_URLS } from '@/utils/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starwarsApi = createApi({
    reducerPath: 'starwarsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    tagTypes: ['Starwars'],
    endpoints: (build) => ({
        getCharacters: build.query<ListResponse, void>({
            query: () => ({ url: `${API_URLS.characters}`, method: 'GET' }),
            providesTags: ['Starwars'],
        }),

        getVehicles: build.query<ListResponse, void>({
            query: () => ({ url: `${API_URLS.vehicles}`, method: 'GET' }),
            providesTags: ['Starwars'],
        }),

        getPlanets: build.query<ListResponse, void>({
            query: () => ({ url: `${API_URLS.planets}`, method: 'GET' }),
            providesTags: ['Starwars'],
        }),

        getCharacterDetail: build.query<CharacterDetailsResponse, string>({
            query: (characterId) => ({
                url: `${API_URLS.characters}/${characterId}`,
                method: 'GET',
            }),
            providesTags: ['Starwars'],
        }),
        getVehicleDetail: build.query<VehicleDetailsResponse, string>({
            query: (vehicleId) => ({
                url: `${API_URLS.vehicles}/${vehicleId}`,
                method: 'GET',
            }),
            providesTags: ['Starwars'],
        }),
        getPlanetDetail: build.query<PlanetDetailsResponse, string>({
            query: (planetId) => ({
                url: `${API_URLS.planets}/${planetId}`,
                method: 'GET',
            }),
            providesTags: ['Starwars'],
        }),
    }),
});

export const {
    useGetCharactersQuery,
    useGetPlanetsQuery,
    useGetVehiclesQuery,
    useGetCharacterDetailQuery,
    useGetVehicleDetailQuery,
    useGetPlanetDetailQuery,
} = starwarsApi;
