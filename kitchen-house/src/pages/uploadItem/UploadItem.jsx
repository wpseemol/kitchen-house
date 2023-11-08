import { useState } from 'react';
import BtnCustom from '../../components/btnCustom/BtnCustom';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';

const UploadItem = () => {
    const [catAdd, setCatAdd] = useState(false);
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
            <div className="relative z-[2] container  mx-auto">
                <div className="">
                    <div className="w-fit mx-auto bg-white text-[#797979] font-medium p-16 pb-32">
                        <div className="text-white mb-14">
                            <div className="">
                                <h3 className="font-iconFont text-5xl text-primaryColor">
                                    Item Upload
                                </h3>
                            </div>
                        </div>

                        <form className="grid md:grid-cols-2 grid-cols-1 gap-4  text-xl font-thin">
                            <div className="w-[22rem] mb-4">
                                <input
                                    type="text"
                                    name="itmeName"
                                    id="fullName"
                                    placeholder="Food item name"
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3 "
                                />
                            </div>
                            <div className="w-[22rem] mb-4">
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="Item Price"
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                />
                            </div>

                            <div className="w-full mb-4 md:col-span-2">
                                <div className="flex items-center gap-5">
                                    <div className="sm:w-1/2 flex items-center gap-5">
                                        <select
                                            defaultValue="option1"
                                            className="border-b border-[#e5e5e5] text-[#797979] w-full focus:outline-none pb-3"
                                            name="occasion"
                                            id="occasion">
                                            <option value="option1">
                                                Category
                                            </option>
                                            <option value="option2">
                                                Option 2
                                            </option>
                                            <option value="option3">
                                                Occasion
                                            </option>
                                        </select>
                                        <div
                                            onClick={() => {
                                                setCatAdd(!catAdd);
                                            }}
                                            className="text-4xl ">
                                            {catAdd ? (
                                                <IoMdRemoveCircle />
                                            ) : (
                                                <IoMdAddCircle />
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={`sm:w-1/2 ${
                                            catAdd ? 'block' : 'hidden'
                                        }`}>
                                        <input
                                            type="text"
                                            name="price"
                                            placeholder="Category name add"
                                            className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <textarea
                                    name=""
                                    id=""
                                    cols=""
                                    rows="3"
                                    placeholder="Item description"
                                    className="border-b border-[#e5e5e5] w-full focus:outline-none pb-3 resize-none"></textarea>
                            </div>
                            <div className="md:col-span-2 mt-3">
                                <div className="w-fit mx-auto ">
                                    <BtnCustom>Add Item</BtnCustom>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* pre order section end */}
        </div>
    );
};

export default UploadItem;
