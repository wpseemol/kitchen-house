import Rating from '../rating/Rating';
import '../../assets/css/hover.css';
import { useQuery } from '@tanstack/react-query';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import Swal from 'sweetalert2';

const FoodItems = () => {
    const axiosBasUrl = useAxiosBasUrl();

    const { data } = useQuery({
        queryKey: ['food-items'],
        queryFn: async () => {
            try {
                const response = await axiosBasUrl.get('/food-items');
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
        <div className="bg-[#f5f2ed] relative py-16 pb-20 overflow-hidden">
            {/* background Design */}
            <div className="absolute top-0 z-[1] w-fit h-fit overflow-hidden ">
                <figure className="">
                    <img
                        src="https://i.ibb.co/BHJ1fbs/shape-15.png"
                        alt="Animation design shape"
                    />
                </figure>
            </div>
            <div className="absolute top-60 right-0 z-[1] w-fit h-fit overflow-hidden ">
                <figure className="">
                    <img
                        src="https://i.ibb.co/9Hxp9Vg/shape-18.png"
                        alt="Animation design shape"
                    />
                </figure>
            </div>
            <div className="absolute top-0 lg:right-60 md:right-5 -right-28 z-[1] w-[20rem] h-[20rem] overflow-hidden ">
                <figure className="animate-jump animate-infinite animate-duration-[10000ms] mx-auto w-fit">
                    <img
                        src="https://i.ibb.co/2yYpqLM/shape-17.png"
                        alt="Animation design right"
                    />
                </figure>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-[1] w-[20rem] h-[20rem] overflow-hidden ">
                <figure className="animate-jump animate-infinite animate-duration-[10000ms] mx-auto mt-10 w-fit">
                    <img
                        src="https://i.ibb.co/j5jMQPX/shape-16.png.png"
                        alt="Animation design left"
                    />
                </figure>
            </div>
            {/* background Design */}

            <div className="relative z-[2] container  mx-auto">
                <div className=" mb-14">
                    <div className="">
                        <h3 className="font-iconFont text-5xl ">
                            Our All Food Items
                        </h3>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {/* item start */}
                    {data?.map((item) => {
                        return (
                            <>
                                <div
                                    key={item?._id}
                                    className="max-w-xs rounded-md shadow-md bg-white text-black group relative">
                                    <div className="h-72 relative overflow-hidden">
                                        <img
                                            src={item?.itemImage?.url1}
                                            alt={item?.itmeName}
                                            className="object-cover object-center w-full rounded-t-md h-full  bg-gray-500"
                                        />
                                        {/* over lay */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-white/40 group-hover:block hidden"></div>
                                        {/* button section */}
                                        <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-3 group-hover:scale-100 scale-0 duration-300">
                                            <div>
                                                <button
                                                    className="btnContainer bg-black text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                                                    <span className="z-10 relative">
                                                        Add to cart
                                                    </span>
                                                    <div className="absolute -top-1 hoverContent -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className="btnContainer bg-black text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                                                    <span className="z-10 relative">
                                                        See details
                                                    </span>
                                                    <div className="absolute -top-1 hoverContent -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
                                                </button>
                                            </div>
                                        </div>
                                        {/* button section */}
                                    </div>

                                    <div className="w-fit mx-auto mt-4 text-[#FAB421]">
                                        <Rating />
                                    </div>
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold ">
                                                {item?.itmeName}
                                            </h2>
                                            <p>
                                                <span>$</span>
                                                <span>{item?.itemPrice}</span>
                                                .00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FoodItems;
