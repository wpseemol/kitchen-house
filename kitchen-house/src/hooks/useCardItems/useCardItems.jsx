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

    const email = user?.email ? user?.email : 'email';

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['card-items'],
        queryFn: async () => {
            try {
                const response = await axiosBasUrl.get(`/card/${email}`);
                return response.data;
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
            }
        },
    });

    useEffect(() => {
        refetch();
    }, [refetch, user]);

    return { data, isLoading, refetch };
};

export default useCardItems;
