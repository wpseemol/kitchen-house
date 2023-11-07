import { useEffect } from 'react';
import Glide from '@glidejs/glide';
const HomeProductItems = () => {
    useEffect(() => {
        const slider = new Glide('.glide-04', {
            type: 'carousel',
            focusAt: 'center',
            perView: 5,
            autoplay: 3500,
            animationDuration: 700,
            gap: 20,
            classNames: {
                nav: {
                    active: '[&>*]:bg-wuiSlate-700',
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount();

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <>
            {/*<!-- Component: Carousel with controls outside --> */}
            <div className="glide-04 relative w-full flex flex-col-reverse">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li>
                            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                                <div className="h-72">
                                    <img
                                        src="https://source.unsplash.com/random/300x300/?2"
                                        alt=""
                                        className="object-cover object-center w-full rounded-t-md h-full  bg-gray-500"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold ">
                                            Donec lectus leo
                                        </h2>
                                        <p>
                                            <span>$</span>
                                            15.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                                <div className="h-72">
                                    <img
                                        src="https://source.unsplash.com/random/300x300/?2"
                                        alt=""
                                        className="object-cover object-center w-full rounded-t-md h-full  bg-gray-500"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold ">
                                            Donec lectus leo
                                        </h2>
                                        <p>
                                            <span>$</span>
                                            15.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                                <div className="h-72">
                                    <img
                                        src="https://source.unsplash.com/random/300x300/?2"
                                        alt=""
                                        className="object-cover object-center w-full rounded-t-md h-full  bg-gray-500"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold ">
                                            Donec lectus leo
                                        </h2>
                                        <p>
                                            <span>$</span>
                                            15.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                                <div className="h-72">
                                    <img
                                        src="https://source.unsplash.com/random/300x300/?2"
                                        alt=""
                                        className="object-cover object-center w-full rounded-t-md h-full  bg-gray-500"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold ">
                                            Donec lectus leo
                                        </h2>
                                        <p>
                                            <span>$</span>
                                            15.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                                <div className="h-72">
                                    <img
                                        src="https://source.unsplash.com/random/300x300/?2"
                                        alt=""
                                        className="object-cover object-center w-full rounded-t-md h-full  bg-gray-500"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold ">
                                            Donec lectus leo
                                        </h2>
                                        <p>
                                            <span>$</span>
                                            15.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                                <div className="h-72">
                                    <img
                                        src="https://source.unsplash.com/random/300x300/?2"
                                        alt=""
                                        className="object-cover object-center w-full rounded-t-md h-full  bg-gray-500"
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold ">
                                            Donec lectus leo
                                        </h2>
                                        <p>
                                            <span>$</span>
                                            15.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/*    <!-- Controls --> */}
                <div
                    className="flex w-full items-center justify-end gap-2 p-4"
                    data-glide-el="controls">
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full  bg-white text-slate-700 transition duration-300  hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5">
                            <title>prev slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full  bg-white text-slate-700 transition duration-300  hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5">
                            <title>next slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {/*<!-- End Carousel with controls outside --> */}
        </>
    );
};

export default HomeProductItems;
