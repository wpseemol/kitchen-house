import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import { useQuery } from '@tanstack/react-query';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import { IoMdAdd, IoMdClose } from 'react-icons/io';
import { AiOutlineEdit, AiOutlineMinus } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';

import BtnCustom from '../../components/btnCustom/BtnCustom';
import 'react-tabs/style/react-tabs.css';
import Swal from 'sweetalert2';
import PageLoading from '../../components/pageLoading/PageLoading';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import PrivetRoute from '../../privetRoute/PrivetRoute';

const SingleItem = () => {
    const { product: productId } = useParams();

    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    const [itemCartCount, setItemCartCount] = useState(1);
    const [imgPreviewWindow, setImgPreviewWindow] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const axiosBasUrl = useAxiosBasUrl();

    const { data, isLoading } = useQuery({
        queryKey: ['item'],
        queryFn: async () => {
            try {
                const response = await axiosBasUrl.get(
                    `/food-items/${productId}`
                );
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

    // console.log(itemCartCount);
    const handelAddCart = () => {
        axiosBasUrl
            .post('/card', {
                productId: productId,
                itemQuantity: itemCartCount,
                autherBy: {
                    email: user?.email,
                    uid: user?.uid,
                },
            })
            .then(function () {
                Swal.fire({
                    title: 'Done!',
                    text: 'Product Card Add is Done',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });
            })
            .catch(function (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
            });
    };

    if (isLoading) {
        return <PageLoading />;
    }

    const imageUralObj = data?.itemImage || {};
    const itemImageArr = Object.entries(imageUralObj).map(([key, value]) => ({
        [key]: value,
    }));

    return (
        <>
            <Helmet>
                <title>Kitchen House | {data?.itemName}</title>
            </Helmet>
            <div className="sm:py-16 py-8 sm:pb-24 pb-12 container mx-auto ">
                <div className="">
                    <div className="flex sm:flex-row flex-col items-center justify-center gap-6 px-2 sm:px-0 my-10 sm:my-0 ">
                        {' '}
                        <div className="lg:w-1/3 md:w-1/2 w-full h-[25rem] overflow-hidden ">
                            <div
                                className={
                                    itemImageArr?.length > 1
                                        ? 'h-4/5'
                                        : 'h-full'
                                }>
                                <figure
                                    onClick={() => {
                                        setPreviewImage(data?.itemImage?.url1);
                                        setImgPreviewWindow(true);
                                    }}
                                    className="h-full">
                                    <img
                                        src={data?.itemImage?.url1}
                                        alt={data?.itemName}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </figure>
                            </div>
                            {itemImageArr?.length > 1 && (
                                <div className=" w-full overflow-x-auto snap-x">
                                    <div className="flex items-center gap-4 h-16 w-fit my-4 ">
                                        {itemImageArr
                                            ?.slice(1)
                                            .map((imgUrl, inx) => {
                                                return (
                                                    <figure
                                                        onClick={() => {
                                                            setPreviewImage(
                                                                imgUrl[
                                                                    `url${
                                                                        inx + 2
                                                                    }`
                                                                ]
                                                            );
                                                            setImgPreviewWindow(
                                                                true
                                                            );
                                                        }}
                                                        key={`image${inx}`}
                                                        className="w-20 h-full ">
                                                        <img
                                                            src={
                                                                imgUrl[
                                                                    `url${
                                                                        inx + 2
                                                                    }`
                                                                ]
                                                            }
                                                            alt={data?.itemName}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </figure>
                                                );
                                            })}
                                    </div>
                                </div>
                            )}
                            {/* picture Preview window */}
                            <div
                                className={`${
                                    imgPreviewWindow
                                        ? 'scale-100 opacity-100'
                                        : 'scale-0 opacity-0'
                                } fixed w-screen duration-150 h-screen z-30 bg-black/60 top-0 left-0`}>
                                <div className="flex justify-center items-center h-full px-2 sm:px-0">
                                    <figure className=" md:h-[34rem]  relative">
                                        <img
                                            src={previewImage}
                                            alt={data?.itemName}
                                            className="w-full h-full object-cover object-center"
                                        />
                                        <div className="absolute -top-2 -right-2">
                                            <button
                                                onClick={() => {
                                                    setImgPreviewWindow(false);
                                                }}
                                                className=" hover:scale-110 duration-700  text-3xl font-bold bg-primaryColor text-white rounded-full p-1">
                                                <IoMdClose className="hover:rotate-180 duration-1000" />
                                            </button>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <h2 className="text-4xl font-bold">
                                    {data?.itemName}
                                </h2>
                                <p className="my-3 text-lg font-semibold">
                                    Category: <span>{data?.itemName}</span>
                                </p>
                                <p className="text-lg">
                                    Price: <span>${data?.itemPrice}.00</span>
                                </p>
                                <p className="my-3 text-lg">
                                    Author: <span>{data?.postBy?.name}</span>
                                </p>
                                <p className=" text-lg">
                                    Post Time: <span>{data?.postTime}</span>
                                </p>
                            </div>
                            <div className="flex items-center mt-6 border w-fit">
                                <div>
                                    <button
                                        disabled={1 >= itemCartCount}
                                        onClick={() => {
                                            setItemCartCount(itemCartCount - 1);
                                        }}
                                        className="bg-primaryColor text-white p-2 text-2xl
                                disabled:bg-primaryColor/50">
                                        <AiOutlineMinus />
                                    </button>
                                </div>
                                <div className="w-16">
                                    <input
                                        disabled={
                                            data?.itemQuantity <= itemCartCount
                                        }
                                        onChange={(e) => {
                                            data?.itemQuantity <=
                                            parseInt(e.target.value)
                                                ? setItemCartCount(
                                                      data?.itemQuantity
                                                  )
                                                : isNaN(
                                                      parseInt(e.target.value)
                                                  )
                                                ? setItemCartCount(1)
                                                : setItemCartCount(
                                                      parseInt(e.target.value)
                                                  );
                                        }}
                                        className=" text-black w-full text-center py-1 outline-none"
                                        value={itemCartCount}
                                        type="number"
                                        name="cardItemQuantity"
                                        id="cartIteId"
                                    />
                                </div>
                                <div>
                                    <button
                                        disabled={
                                            data?.itemQuantity <= itemCartCount
                                        }
                                        onClick={() => {
                                            setItemCartCount(itemCartCount + 1);
                                        }}
                                        className="bg-primaryColor text-white p-2 text-2xl disabled:bg-primaryColor/50">
                                        <IoMdAdd />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <PrivetRoute>
                                    {' '}
                                    <div onClick={handelAddCart}>
                                        <BtnCustom>
                                            <span>Add Card</span>
                                        </BtnCustom>
                                    </div>
                                </PrivetRoute>
                                <PrivetRoute>
                                    <div>
                                        <BtnCustom>
                                            <p className="flex justify-center items-center gap-3">
                                                {' '}
                                                edit <AiOutlineEdit />
                                            </p>
                                        </BtnCustom>
                                    </div>
                                </PrivetRoute>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-6">
                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>
                                        <span className="text-lg font-semibold m-2">
                                            Description
                                        </span>
                                    </Tab>
                                    <Tab>
                                        <span className="text-lg font-semibold m-2">
                                            Additional Information
                                        </span>
                                    </Tab>
                                    <Tab>
                                        <span className="text-lg font-semibold m-2">
                                            Reviews
                                        </span>
                                    </Tab>
                                </TabList>

                                <TabPanel>
                                    <p className="">{data?.description}</p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Coming soon</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Coming soon</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleItem;
