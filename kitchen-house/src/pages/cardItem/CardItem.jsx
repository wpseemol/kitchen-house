import { Helmet } from 'react-helmet-async';
import useCardItems from '../../hooks/useCardItems/useCardItems';
import PageLoading from '../../components/pageLoading/PageLoading';
import { FaTrashCan } from 'react-icons/fa6';
import { useState } from 'react';

const CardItem = () => {
    const { data: cardData = [], isLoading } = useCardItems();
    const [quantitiesCount, setquantitiesCount] = useState(
        cardData.map((item) => {
            return item?.itemQuantity ? item?.itemQuantity : 1;
        })
    );

    const handleAdd = (index) => {
        const newQuantities = [...quantitiesCount];
        newQuantities[index] = newQuantities[index] + 1;
        setquantitiesCount(newQuantities);
    };

    const handleRemove = (index) => {
        const newQuantities = [...quantitiesCount];
        if (newQuantities[index] > 1) {
            newQuantities[index] = newQuantities[index] - 1;
            setquantitiesCount(newQuantities);
        }
    };

    if (isLoading) {
        return <PageLoading />;
    }

    return (
        <>
            <Helmet>
                <title>Kitchen House | Card(0) </title>
            </Helmet>
            <div
                className="bg-fixed bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('https://i.ibb.co/xMycpsG/7e8c85a2e79e4fdd914e037e97bb0bc1.jpg')`,
                    minHeight: '80vh',
                }}>
                <div className="bg-slate-200/60 w-full min-h-[80vh]">
                    <div className="container mx-auto py-16">
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
                                    {cardData?.map((element, inx) => {
                                        return (
                                            <tr
                                                key={inx}
                                                className="transition-colors duration-300 hover:bg-primaryColor/60 ">
                                                <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                                                    <div className="w-20 h-20 mx-auto">
                                                        <img
                                                            src={
                                                                element
                                                                    ?.cardItemResult
                                                                    ?.itemImage
                                                                    ?.url1
                                                            }
                                                            alt={
                                                                element
                                                                    ?.cardItemResult
                                                                    ?.itemName
                                                            }
                                                            className="w-full object-cover"
                                                        />
                                                    </div>
                                                </td>
                                                <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                                                    <div className="">
                                                        <h2>
                                                            {' '}
                                                            {
                                                                element
                                                                    ?.cardItemResult
                                                                    ?.itemName
                                                            }{' '}
                                                        </h2>
                                                    </div>
                                                </td>

                                                <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                                                    <div className="">
                                                        <h2 className="border border-black flex justify-center items-center w-fit">
                                                            <button
                                                                className="  p-2 rounded-sm border-r border-black text-lg font-bold"
                                                                onClick={() =>
                                                                    handleRemove(
                                                                        inx
                                                                    )
                                                                }>
                                                                -
                                                            </button>
                                                            <span className="  px-3 py-2 text-lg text-black ">
                                                                {
                                                                    quantitiesCount[
                                                                        inx
                                                                    ]
                                                                }
                                                            </span>

                                                            <button
                                                                className="  p-2 rounded-sm border-l border-black text-lg font-bold"
                                                                onClick={() =>
                                                                    handleAdd(
                                                                        inx
                                                                    )
                                                                }>
                                                                +
                                                            </button>
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                                                    <div className="">
                                                        <p>
                                                            $
                                                            <span>
                                                                {
                                                                    element
                                                                        ?.cardItemResult
                                                                        ?.itemPrice
                                                                }
                                                            </span>
                                                            .00
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                                                    <div className="flex items-center gap-3">
                                                        <p className="">
                                                            $
                                                            {element?.itemQuantity *
                                                                element
                                                                    ?.cardItemResult
                                                                    ?.itemPrice}
                                                            <span>.00</span>
                                                        </p>
                                                        {' || '}
                                                        <div
                                                            // onClick={() =>
                                                            //     handalRemoveFromCard(
                                                            //         element._id
                                                            //     )
                                                            // }
                                                            className="w-fit hover:scale-150 hover:text-red-600 duration-200 text-red-500">
                                                            <FaTrashCan />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardItem;
