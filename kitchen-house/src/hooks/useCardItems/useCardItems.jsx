import { useQuery } from '@tanstack/react-query';
import useAxiosBasUrl from '../useAxiosBasUrl';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const useCardItems = () => {
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};
    const axiosBasUrl = useAxiosBasUrl();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['card-items'],
        queryFn: async () => {
            const response = await axiosBasUrl.get(`/card-data/`);
            return response.data;
        },
    });

    useEffect(() => {
        refetch();
    }, [refetch, user]);

    return { data, isLoading, refetch };
};

export default useCardItems;
