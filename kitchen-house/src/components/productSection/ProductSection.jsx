import AnimesonBg from '../animesonBg/AnimesonBg';
import videoUrl from '../../assets/videos/homeProductSectonvideo.mp4';
import HomeProductItems from '../homeProductItems/HomeProductItems';

const ProductSection = () => {
    return (
        <>
            <div className="  relative z-[1] h-[52rem] w-full -mt-10 ">
                {/* bg deseigine start  */}
                <figure className="absolute top-0 left-0 z-[3]">
                    <img
                        src="https://i.ibb.co/SRncHs1/shape-5.png"
                        alt="desigine"
                    />
                </figure>
                <figure className="absolute bottom-28 right-10 z-[3]">
                    <img
                        src="https://i.ibb.co/KNmBtNN/shape-7.png"
                        alt="desigine"
                    />
                </figure>
                <div className="absolute text-green-50 top-28 left-12 animate-jump animate-infinite animate-duration-[10000ms] z-[3]">
                    <AnimesonBg />
                </div>
                <div className="h-full w-full absolute bottom-0 left-0 z-[1]">
                    <video
                        autoPlay
                        loop
                        muted
                        className="h-full w-full object-cover"
                        data-background-video="true">
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-[2]"></div>
                {/* bg deseigine end  */}
                {/* product section */}
                <div className="relative z-[4] pt-16">
                    <div className="text-center text-white">
                        <div className="">
                            <h3 className="font-iconFont text-3xl text-primaryColor">
                                Our Service
                            </h3>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold my-5">
                                Our All Delicious & Tasty Product
                            </h2>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <HomeProductItems />
                    </div>
                </div>
                {/* product section */}
            </div>
        </>
    );
};

export default ProductSection;
