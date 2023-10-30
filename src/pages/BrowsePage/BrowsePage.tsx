import {
    useGetCharactersQuery,
    useGetPlanetsQuery,
    useGetVehiclesQuery,
} from '@/api';
import VaderImg from '@/assets/VaderImg.jpg';
import PlanetImg from '@/assets/PlanetImg.jpg';
import VehicleImg from '@/assets/VehicleImg.jpg';
import { Card } from 'antd';
import * as Styled from './BrowsePage.styles';
import LoadingElement from '../../components/LoadingElement/LoadingElement';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { extractIdFromUrl } from '@/utils/helpers';

const BrowsePage = () => {
    const currentPage = useAppSelector((state) => state.app.currentPage);
    const charactersQuery = useGetCharactersQuery();
    const planetsQuery = useGetPlanetsQuery();
    const vehiclesQuery = useGetVehiclesQuery();
    const navigate = useNavigate();

    const { isLoading, data } =
        currentPage === 'characters'
            ? charactersQuery
            : currentPage === 'planets'
            ? planetsQuery
            : vehiclesQuery;

    const getImage = (imageUrl?: string) =>
        imageUrl
            ? imageUrl
            : currentPage === 'characters'
            ? VaderImg
            : currentPage === 'planets'
            ? PlanetImg
            : VehicleImg;

    const handleCardClick = (url: string) => {
        const newUrl = extractIdFromUrl(url);
        newUrl && navigate(`${newUrl}`);
    };

    return (
        <>
            {!isLoading && data ? (
                <Styled.Wrapper>
                    {
                        //NOTE:imageUrl isn't provided by swapi.dev API so I'm getting using one asset to all images
                        data.results.map(({ name, url, imageUrl }) => (
                            <Styled.BrowseCard
                                key={name}
                                hoverable
                                cover={
                                    <img alt="vader" src={getImage(imageUrl)} />
                                }
                                onClick={() => handleCardClick(url)}
                            >
                                <Card.Meta title={name} />
                            </Styled.BrowseCard>
                        ))
                    }
                </Styled.Wrapper>
            ) : (
                <LoadingElement
                    title={`Loading Star Wars ${
                        currentPage ? currentPage : 'information'
                    }...`}
                />
            )}
        </>
    );
};

export default BrowsePage;
