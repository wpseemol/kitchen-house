const ItemCartBtn = () => {
    return (
        <>
            <div>
                <button
                    className="btnContainer bg-black text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                    <span className="z-10 relative">Add to cart</span>
                    <div className="absolute -top-1 hoverContent -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
                </button>
            </div>
            <div>
                <button
                    className="btnContainer bg-black text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                    <span className="z-10 relative">See details</span>
                    <div className="absolute -top-1 hoverContent -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
                </button>
            </div>
        </>
    );
};

export default ItemCartBtn;
