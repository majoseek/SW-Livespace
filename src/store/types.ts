import { NAV_URLS } from '@/utils/constants';

type Modes = keyof typeof NAV_URLS;

export interface AppState {
    currentPage?: Modes;
}
