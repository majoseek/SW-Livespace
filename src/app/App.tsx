import SideMenu from '@/components/SideMenu';
import BrowsePage from '@/pages/BrowsePage';
import * as Styled from './App.styles';
import { Route, Routes } from 'react-router-dom';
import { useSetCurrentPage } from '@/hooks/useSetCurrentPage';
import DetailsPage from '@/pages/DetailsPage';
import { NAV_URLS } from '@/utils/constants';

const App = () => {
    const { currentPage } = useSetCurrentPage();

    return (
        <Styled.AppHolder>
            {currentPage && (
                <>
                    <SideMenu />
                    <Styled.MainContent>
                        <Routes>
                            <Route
                                path={NAV_URLS.characters}
                                element={<BrowsePage />}
                            />
                            <Route
                                path={NAV_URLS.planets}
                                element={<BrowsePage />}
                            />
                            <Route
                                path={NAV_URLS.vehicles}
                                element={<BrowsePage />}
                            />
                            <Route
                                path={`${NAV_URLS.characters}:detailsId`}
                                element={<DetailsPage />}
                            />
                            <Route
                                path={`${NAV_URLS.vehicles}/:detailsId`}
                                element={<DetailsPage />}
                            />
                            <Route
                                path={`${NAV_URLS.planets}/:detailsId`}
                                element={<DetailsPage />}
                            />
                        </Routes>
                    </Styled.MainContent>
                </>
            )}
        </Styled.AppHolder>
    );
};

export default App;
