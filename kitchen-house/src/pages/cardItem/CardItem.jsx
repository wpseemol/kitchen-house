import { Helmet } from 'react-helmet-async';
import useCardItems from '../../hooks/useCardItems/useCardItems';
import PageLoading from '../../components/pageLoading/PageLoading';
import { FaTrashCan } from 'react-icons/fa6';
import { useState } from 'react';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import BtnCustom from '../../components/btnCustom/BtnCustom';
import CardItemComponent from '../../components/CardItemComponent/CardItemComponent';

const CardItem = () => {
    const axiosBasUrl = useAxiosBasUrl();

    const navigate = useNavigate();

    const { data: cardData = [], isLoading, refetch } = useCardItems();

    const handelRemoveFromCard = (removeId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to remove',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosBasUrl
                    .delete(`/card-item-remove/${removeId}`)
                    .then(() => {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your Card Item has been remove.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        Swal.fire('Deleted!', error, 'success');
                    });
            }
        });
    };

    if (isLoading) {
        return (
            <>
                <PageLoading />
            </>
        );
    }

    cardData?.length === 0;

    return (
        <>
            <Helmet>
                <title>Kitchen House | Card </title>
            </Helmet>
            <div
                className="bg-fixed bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('https://i.ibb.co/xMycpsG/7e8c85a2e79e4fdd914e037e97bb0bc1.jpg')`,
                    minHeight: '80vh',
                }}>
                <div className="bg-slate-200/60 w-full min-h-[80vh]">
                    <div className="container mx-auto py-16">
                        {cardData?.length === 0 ? (
                            <div className="-mt-14">
                                <div className="mx-auto w-fit">
                                    <img
                                        src="https://i.ibb.co/4fLKwvn/empty-cart-7359557-6024626.png"
                                        alt="empty Cart Image"
                                    />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-3xl">
                                        {' '}
                                        Your cart is{' '}
                                        <span className="text-primaryColor">
                                            Empty
                                        </span>{' '}
                                    </h2>
                                    <p className="my-5 text-base">
                                        Must add items on the cart before you
                                        proceed to check out
                                    </p>

                                    <BtnCustom
                                        onClick={() => {
                                            navigate(-1);
                                        }}>
                                        Return Home
                                    </BtnCustom>
                                </div>
                            </div>
                        ) : (
                            <div className="overflow-auto">
                                <table className="w-full text-left border border-separate rounded border-black">
                                    <tbody>
                                        <tr className="transition-colors duration-300 hover:bg-primaryColor/60 ">
                                            <th className="h-12 px-6 text-2xl font-bold stroke-slate-700 text-neutral-900 bg-primaryColor w-40 border-t border-l first:border-l-0 border-black">
                                                Image
                                            </th>
                                            <th className="h-12 px-6 text-2xl font-bold stroke-slate-700 text-neutral-900 bg-primaryColor w-40 border-t border-l first:border-l-0 border-black">
                                                Product Name
                                            </th>

                                            <th className="h-12 px-6 text-2xl font-bold stroke-slate-700 text-neutral-900 bg-primaryColor w-40 border-t border-l first:border-l-0 border-black">
                                                Quantity
                                            </th>
                                            <th className="h-12 px-6 text-2xl font-bold stroke-slate-700 text-neutral-900 bg-primaryColor w-40 border-t border-l first:border-l-0 border-black">
                                                Unit Price
                                            </th>
                                            <th className="h-12 px-6 text-2xl font-bold stroke-slate-700 text-neutral-900 bg-primaryColor w-40 border-t border-l first:border-l-0 border-black">
                                                Total
                                            </th>
                                        </tr>
                                        {cardData?.map((element) => {
                                            return (
                                                <CardItemComponent
                                                    key={element._id}
                                                    data={element}
                                                    refetch={
                                                        refetch
                                                    }></CardItemComponent>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardItem;
