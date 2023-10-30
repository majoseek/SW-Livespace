import { useNavigate, useParams } from 'react-router-dom';
import * as Styled from '@/pages/DetailsPage/DetailsPage.styles';
import { useAppSelector } from '@/hooks/useAppSelector';
import VaderImg from '@/assets/VaderImg.jpg';
import PlanetImg from '@/assets/PlanetImg.jpg';
import VehicleImg from '@/assets/VehicleImg.jpg';
import {
    useGetCharacterDetailQuery,
    useGetPlanetDetailQuery,
    useGetVehicleDetailQuery,
} from '@/api';
import { Card, Typography } from 'antd';
import { extractIdFromUrl } from '@/utils/helpers';
import { setCurrentPage } from '@/store/appSlice';
import { useAppDispatch } from './useAppDispatch';
import {
    CharacterDetailsResponse,
    PlanetDetailsResponse,
    VehicleDetailsResponse,
} from '@/types';
import useDataFetching from './useDetailsFetching';

export const useDetailsPage = () => {
    const currentPage = useAppSelector((state) => state.app.currentPage);
    const { detailsId } = useParams<{ detailsId: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    if (!detailsId || !currentPage) return {};

    const { data, isLoading } =
        currentPage === 'characters'
            ? useGetCharacterDetailQuery(detailsId)
            : currentPage === 'planets'
            ? useGetPlanetDetailQuery(detailsId)
            : useGetVehicleDetailQuery(detailsId);

    const { items: characterVehicles, loading: characterVehiclesLoading } =
        useDataFetching<VehicleDetailsResponse>(
            data && 'vehicles' in data ? data.vehicles : undefined
        );
    const { items: planetResidents, loading: planetResidentsLoading } =
        useDataFetching<CharacterDetailsResponse>(
            data && 'residents' in data ? data.residents : undefined
        );
    const { items: vehiclePilots, loading: vehiclePilotsLoading } =
        useDataFetching<CharacterDetailsResponse>(
            data && 'pilots' in data ? data.pilots : undefined
        );

    const homeworldId =
        data && 'homeworld' in data
            ? extractIdFromUrl(data.homeworld).toString()
            : '';

    const { data: characterPlanet, isLoading: isLoadingCharacterPlanet } =
        useGetPlanetDetailQuery(homeworldId);

    const handleCharacterPlanetClick = () => {
        dispatch(setCurrentPage('planets'));
        navigate(`/planets/${homeworldId}`);
    };

    const handleVehicleClick = (vehicleUrl: string) => {
        const vehicleId = extractIdFromUrl(vehicleUrl);
        dispatch(setCurrentPage('vehicles'));
        navigate(`/vehicles/${vehicleId}`);
    };

    const handleCharacterClick = (characterUrl: string) => {
        const residentId = extractIdFromUrl(characterUrl);
        dispatch(setCurrentPage('characters'));
        navigate(`/${residentId}`);
    };

    const getCharacterNode = (data: CharacterDetailsResponse) => {
        return (
            <Styled.DetailsCard
                cover={<Styled.DetailsImg alt="vader" src={VaderImg} />}
            >
                <Card.Meta
                    title={data.name}
                    description={
                        <Styled.CardContent>
                            <Typography.Link
                                disabled={isLoadingCharacterPlanet}
                                onClick={handleCharacterPlanetClick}
                            >
                                {isLoadingCharacterPlanet || !characterPlanet
                                    ? 'Loading character planet...'
                                    : `Character's planet: ${characterPlanet.name}`}
                            </Typography.Link>
                            {data.vehicles.length > 0 ? (
                                <>
                                    <Typography.Text>
                                        {characterVehiclesLoading
                                            ? 'Loading characters vehicles...'
                                            : 'Character vehicles:'}
                                    </Typography.Text>
                                    {characterVehicles?.map((vehicle) => (
                                        <Typography.Link
                                            key={vehicle.name}
                                            disabled={characterVehiclesLoading}
                                            onClick={() =>
                                                handleVehicleClick(vehicle.url)
                                            }
                                        >
                                            {vehicle.name}
                                        </Typography.Link>
                                    ))}
                                </>
                            ) : (
                                <Typography.Text>
                                    Character has no vehicles
                                </Typography.Text>
                            )}
                        </Styled.CardContent>
                    }
                />
            </Styled.DetailsCard>
        );
    };

    const getVehicleNode = (data: VehicleDetailsResponse) => {
        return (
            <Styled.DetailsCard
                cover={<Styled.DetailsImg alt="vehicle" src={VehicleImg} />}
            >
                <Card.Meta
                    title={data.name}
                    description={
                        <Styled.CardContent>
                            <Typography.Text>
                                Vehicle class: {data.vehicle_class}
                            </Typography.Text>
                            {data.pilots.length > 0 ? (
                                vehiclePilotsLoading ? (
                                    'Loading vehicle pilots...'
                                ) : (
                                    vehiclePilots?.map((pilot) => (
                                        <Typography.Link
                                            key={pilot.name}
                                            disabled={vehiclePilotsLoading}
                                            onClick={() =>
                                                handleCharacterClick(pilot.url)
                                            }
                                        >
                                            {pilot.name}
                                        </Typography.Link>
                                    ))
                                )
                            ) : (
                                <Typography.Text>
                                    Vehicle has no pilots!
                                </Typography.Text>
                            )}
                        </Styled.CardContent>
                    }
                />
            </Styled.DetailsCard>
        );
    };

    const getPlanetNode = (data: PlanetDetailsResponse) => {
        return (
            <Styled.DetailsCard
                cover={<Styled.DetailsImg alt="planet" src={PlanetImg} />}
            >
                <Card.Meta
                    title={data.name}
                    description={
                        <Styled.CardContent>
                            <Typography.Text>
                                Population count: {data.population}
                            </Typography.Text>
                            {data.residents.length > 0 ? (
                                planetResidentsLoading ? (
                                    'Loading planet residents...'
                                ) : (
                                    planetResidents?.map((resident) => (
                                        <Typography.Link
                                            key={resident.name}
                                            disabled={planetResidentsLoading}
                                            onClick={() =>
                                                handleCharacterClick(
                                                    resident.url
                                                )
                                            }
                                        >
                                            {resident.name}
                                        </Typography.Link>
                                    ))
                                )
                            ) : (
                                <Typography.Text>
                                    Planet has no residents!
                                </Typography.Text>
                            )}
                        </Styled.CardContent>
                    }
                />
            </Styled.DetailsCard>
        );
    };

    return { getCharacterNode, getPlanetNode, getVehicleNode, isLoading, data };
};
