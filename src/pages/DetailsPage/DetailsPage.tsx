import { useDetailsPage } from '@/hooks/useDetailsPage';
import LoadingElement from '@/components/LoadingElement';

const DetailsPage = () => {
    const { getCharacterNode, getPlanetNode, getVehicleNode, isLoading, data } =
        useDetailsPage();

    return (
        <>
            {!isLoading && data ? (
                <div>
                    {'vehicles' in data
                        ? getCharacterNode(data)
                        : 'vehicle_class' in data
                        ? getVehicleNode(data)
                        : getPlanetNode(data)}
                </div>
            ) : (
                <LoadingElement title="Loading details..." />
            )}
        </>
    );
};

export default DetailsPage;
