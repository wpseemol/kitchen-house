import { Link, useLocation, useNavigate } from 'react-router-dom';
import Rating from '../rating/Rating';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import useCardItems from '../../hooks/useCardItems/useCardItems';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const HomeProductItems = ({ data, refetch }) => {
    const { refetch: carditemRefetch } = useCardItems();

    const location = useLocation();
    const navigate = useNavigate();

    const axiosBasUrl = useAxiosBasUrl();
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    const handelAddCart = (itemId, itemQuantity, buyCount) => {
        if (!user) {
            navigate('/login', { state: { location: location.pathname } });
            return;
        }

        axiosBasUrl
            .post('/card', {
                productId: itemId,
                itemQuantity: 1,
                autherBy: {
                    email: user?.email,
                    uid: user?.uid,
                },
            })
            .then(() => {
                axiosBasUrl
                    .put(`/quantity/${itemId}`, {
                        itemQuantity: itemQuantity - 1,
                        buyCount: buyCount + 1,
                    })
                    .then(() => {
                        Swal.fire({
                            title: 'Done!',
                            text: 'Product Card Add is Done',
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        });

                        carditemRefetch();
                        refetch();
                    })
                    .catch(() => {});
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
            });
    };

    return (
        <>
            <div className="">
                {/*    <!-- Slides --> */}
                <div className="flex items-center gap-3 justify-center flex-wrap">
                    {data?.map((item) => {
                        return (
                            <div key={item?._id} className="">
                                {/* product section */}
                                <div className="sm:w-[20rem] w-[18rem] rounded-md shadow-md bg-white text-black group relative h-[35rem] ">
                                    <div className="h-72 relative overflow-hidden">
                                        <img
                                            src={item?.itemImage?.url1}
                                            alt={item?.itemName}
                                            className="object-cover object-center w-full rounded-t-md h-full  bg-gray-500"
                                        />
                                        {/* over lay */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-white/40 group-hover:block hidden"></div>
                                        {/* button section */}
                                        <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-3 group-hover:scale-100 scale-0 duration-300">
                                            <div>
                                                <button
                                                    onClick={() =>
                                                        handelAddCart(
                                                            item?._id,
                                                            item?.itemQuantity,
                                                            item?.buyCount
                                                        )
                                                    }
                                                    className="btnContainer bg-black text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                                                    <span className="z-[11] relative">
                                                        Add to cart
                                                    </span>
                                                    <div className="absolute -top-1 hoverContent -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
                                                </button>
                                            </div>
                                            <div>
                                                <Link
                                                    to={`/food-items/${item?._id}`}>
                                                    <button
                                                        className="btnContainer bg-black text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                                                        <span className="z-10 relative">
                                                            See details
                                                        </span>
                                                        <div className="absolute -top-1 hoverContent -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* button section */}
                                    </div>

                                    <div className="w-fit mx-auto mt-4 text-[#FAB421]">
                                        <Rating />
                                    </div>

                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <p className="text-base font-medium">
                                                Category:{' '}
                                                <span>
                                                    {' '}
                                                    {
                                                        item?.category?.catName
                                                    }{' '}
                                                </span>
                                            </p>

                                            <h2 className="text-3xl font-semibold ">
                                                {item?.itemName}
                                            </h2>
                                            <p>
                                                Price:
                                                <span>$</span>
                                                {item?.itemPrice} .00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* product section */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default HomeProductItems;

HomeProductItems.propTypes = {
    data: PropTypes.array,
};
