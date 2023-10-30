import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from './useAppDispatch';
import { setCurrentPage } from '@/store/appSlice';
import { useAppSelector } from '@/hooks/useAppSelector';

export const useSetCurrentPage = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector((state) => state.app.currentPage);

    useEffect(() => {
        const path = location.pathname;

        path.startsWith('/vehicles')
            ? dispatch(setCurrentPage('vehicles'))
            : path.startsWith('/planets')
            ? dispatch(setCurrentPage('planets'))
            : dispatch(setCurrentPage('characters'));
    }, []);

    return { currentPage };
};
