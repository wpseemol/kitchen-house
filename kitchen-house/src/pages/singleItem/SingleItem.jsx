import { useParams } from 'react-router-dom';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import { useQuery } from '@tanstack/react-query';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Swal from 'sweetalert2';

const SingleItem = () => {
    const { product: productId } = useParams();

    const axiosBasUrl = useAxiosBasUrl();

    const { data } = useQuery({
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

    return (
        <div className="sm:py-16 py-8 sm:pb-24 pb-12 container mx-auto ">
            <div className="grid sm:grid-cols-4 grid-cols-1 gap-5 w-fit">
                <div className="sm:col-span-1">
                    <div className="">
                        <figure>
                            <img src={data?.itemImage?.url1} alt="" />
                        </figure>
                        <div></div>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <div>
                        <h2 className="text-4xl font-bold">{data?.itemName}</h2>
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
                </div>
                <div className="sm:col-span-4 mt-5">
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
    );
};

export default SingleItem;
