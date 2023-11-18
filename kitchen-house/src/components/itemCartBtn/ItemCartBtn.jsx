import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import PrivetRoute from '../../privetRoute/PrivetRoute';
import useCardItems from '../../hooks/useCardItems/useCardItems';

const ItemCartBtn = ({ itemId, itemQuantity }) => {
    const { refetch } = useCardItems();

    const axiosBasUrl = useAxiosBasUrl();
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    const handelAddCart = () => {
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
                    })
                    .then(() => {
                        Swal.fire({
                            title: 'Done!',
                            text: 'Product Card Add is Done',
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        });

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
            <div>
                <PrivetRoute>
                    <button
                        onClick={handelAddCart}
                        className="btnContainer bg-black text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                        <span className="z-10 relative">Add to cart</span>
                        <div className="absolute -top-1 hoverContent -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
                    </button>
                </PrivetRoute>
            </div>
            <div>
                <Link to={`/food-items/${itemId}`}>
                    <button
                        className="btnContainer bg-black text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                        <span className="z-10 relative">See details</span>
                        <div className="absolute -top-1 hoverContent -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default ItemCartBtn;

ItemCartBtn.propTypes = {
    itemId: PropTypes.string,
    itemQuantity: PropTypes.number,
};
