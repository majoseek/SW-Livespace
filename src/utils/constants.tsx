import { MenuProps } from 'antd';

export const API_BASE_URL = 'https://swapi.dev/api';

export const sideMenuItems: MenuProps['items'] = [
    {
        label: 'Characters',
        key: 'characters',
    },
    {
        label: 'Vehicles',
        key: 'vehicles',
    },
    {
        label: 'Planets',
        key: 'planets',
    },
];

export const API_URLS = {
    characters: '/people',
    vehicles: '/vehicles',
    planets: '/planets',
};

export const NAV_URLS = {
    characters: '/',
    vehicles: '/vehicles',
    planets: '/planets',
};
