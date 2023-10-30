import { fetchData } from '@/utils/helpers';
import { useState, useEffect } from 'react';

export const useDataFetching = <T>(data: string[] | undefined) => {
    const [items, setItems] = useState<T[] | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (data) {
            const promises = data.map((itemUrl) => fetchData<T>(itemUrl));

            Promise.all(promises)
                .then((results) => {
                    setItems(results);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err); //TODO: Add error handling (create ErrorPage and add error message to ErrorFallback in ErrorBoundary)
                });
        }
    }, [data]);

    return { items, loading };
};

export default useDataFetching;
