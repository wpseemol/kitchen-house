import { ToastContainer } from 'react-toastify';
import BtnCustom from '../../components/btnCustom/BtnCustom';

import useCategoryData from '../../hooks/useCategoryData/useCategoryData';
import { FcRemoveImage } from 'react-icons/fc';
import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const EditItem = () => {
    const { uniqCategory } = useCategoryData();

    const [selectedCatOption, setSelectedCatOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedCatOption(event.target.value);
    };

    return (
        <div className="bg-[#f5f2ed] relative py-20 pb-24 overflow-hidden">
            {/* background Design */}
            <div className="absolute top-0 left z-[1] w-fit h-fit overflow-hidden ">
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
            <div className="absolute top-1/2 transform -translate-y-1/2 left-60 z-[1] w-[20rem] h-[20rem] overflow-hidden ">
                <figure className="animate-jump animate-infinite animate-duration-[10000ms] mx-auto mt-10 w-fit">
                    <img
                        src="https://i.ibb.co/j5jMQPX/shape-16.png.png"
                        alt="Animation design left"
                    />
                </figure>
            </div>
            {/* background Design */}
            {/* pre order section start */}
            <div
                // onSubmit={handalUploadItme}
                className="relative z-[2] container  mx-auto">
                <div className="">
                    <div className="w-fit mx-auto bg-white text-[#797979] font-medium sm:p-16 px-2 py-6 ">
                        <div className="text-white mb-14">
                            <div className="flex items-center flex-wrap gap-3 font-iconFont md:text-5xl text-3xl text-primaryColor">
                                <div>
                                    <AiOutlineEdit />
                                </div>
                                <h3 className="">Item Update</h3>
                            </div>
                        </div>

                        <form className="grid md:grid-cols-2 grid-cols-1 gap-4  text-xl font-thin">
                            {/* itemName  */}
                            <div className="sm:w-[22rem] mb-4">
                                <input
                                    type="text"
                                    name="itemName"
                                    placeholder="Food item name"
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3 "
                                    id="upItemName"
                                />
                            </div>
                            {/* price */}
                            <div className="sm:w-[22rem] mb-4 flex items-center gap-3">
                                <div className=" ">
                                    <input
                                        type="number"
                                        name="itemPrice"
                                        placeholder="Item Price"
                                        className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                        id="upItemPrice"
                                    />
                                </div>
                                <div className=" ">
                                    <input
                                        type="number"
                                        name="itemQuantity"
                                        placeholder="Quantity"
                                        className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                        id="upItemQuantity"
                                    />
                                </div>
                            </div>

                            {/* item picture start */}
                            <div className="relative sm:w-[22rem] mb-4 flex items-center gap-5 group">
                                <input
                                    required
                                    // onChange={handelImageUrl1}
                                    type="text"
                                    name="url1"
                                    placeholder="Item Image Url1"
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                    id="upUrl1"
                                />

                                <div className="absolute group-hover:scale-100 scale-0 group-hover:-top-12 group-hover:left-[10rem] duration-200 w-12 h-12 bg-slate-500 border shadow-2xl z-20">
                                    <figure className="w-full h-full">
                                        <img
                                            src="image url"
                                            alt="Image Preview"
                                        />
                                    </figure>
                                </div>
                            </div>
                            {/* image add button click input create */}

                            <div className="sm:w-[22rem] mb-4 flex items-center gap-5 relative group">
                                <input
                                    type="text"
                                    name="ItemName"
                                    placeholder={`Item Image `}
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                    id="IdSomeThing"
                                />
                                <div className="text-4xl " title="Remove">
                                    <FcRemoveImage />
                                </div>

                                <div className="absolute group-hover:scale-100 scale-0 group-hover:-top-16 group-hover:left-[10rem] duration-200 w-16 h-16  border bg-white shadow-2xl z-20">
                                    <figure className="w-full h-full flex items-center justify-center">
                                        <img
                                            src={'image url'}
                                            alt="Image Preview"
                                        />
                                    </figure>
                                </div>
                            </div>

                            {/* image add button click input create */}
                            {/* item picture end */}

                            {/* this is Category section */}

                            <div className="w-full mb-4 md:col-span-2">
                                <div className="flex sm:flex-row flex-col items-center gap-5">
                                    <div className=" w-full flex items-center gap-5">
                                        <select
                                            className="border-b border-[#e5e5e5] text-[#797979] w-full focus:outline-none pb-3"
                                            name="occasion"
                                            id="occasion"
                                            value={selectedCatOption}
                                            onChange={handleSelectChange}>
                                            <option value="">
                                                No category select
                                            </option>
                                            {uniqCategory?.map((category) => {
                                                return (
                                                    <option
                                                        key={category?.catId}
                                                        value="">
                                                        {category?.catName}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <textarea
                                    name="description"
                                    id=""
                                    cols=""
                                    rows="3"
                                    placeholder="Item description"
                                    className="border-b border-[#e5e5e5] w-full focus:outline-none pb-3 resize-none"></textarea>
                            </div>
                            <div className="md:col-span-2 mt-3">
                                <div className="w-fit mx-auto ">
                                    <BtnCustom>Update</BtnCustom>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* pre order section end */}
            <ToastContainer />
        </div>
    );
};

export default EditItem;
