import { useQuery } from '@tanstack/react-query';
import useAxiosBasUrl from '../useAxiosBasUrl';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { useEffect } from 'react';

const useCardItems = () => {
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};
    const axiosBasUrl = useAxiosBasUrl();

    const [isUser, setIsUser] = useState(false);

    const { data: cardData = [], refetch } = useQuery({
        queryKey: ['card-items'],
        enabled: !isUser,
        queryFn: async () => {
            const response = await axiosBasUrl.get('/card-data');

            return response.data;
        },
    });

    useEffect(() => {
        refetch();
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }
    }, [refetch, user]);

    return { cardData, refetch };
};

export default useCardItems;
