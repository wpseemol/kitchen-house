import PropTypes from 'prop-types';
const BtnCustom = ({ children }) => {
    return (
        <button
            className="group bg-black text-white rounded-full px-10 py-4 text-xl z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
            <span className="z-10 relative">{children}</span>
            <div className="absolute top-0 group-hover:left-60 left-0 duration-500 w-full h-full bg-primaryColor "></div>
        </button>
    );
};

export default BtnCustom;

BtnCustom.propTypes = {
    children: PropTypes.node,
};
