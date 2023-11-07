import { Link } from 'react-router-dom';
import BtnCustom from '../btnCustom/BtnCustom';
import regBgImage from '../../assets/videos/regBgimage.mp4';

const Registration = () => {
    return (
        <div className=" grid lg:grid-cols-4 grid-cols-1">
            <div className="lg:col-span-1 lg:block hidden relative">
                <div className="h-screen w-full bottom-0 left-0 z-[1]">
                    <video
                        autoPlay
                        loop
                        muted
                        className="h-full w-full object-cover"
                        data-background-video="true">
                        <source src={regBgImage} type="video/mp4" />
                    </video>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
            </div>
            <div className="lg:col-span-3 my-auto lg:ml-20 px-2 sm:px-0">
                <div className="flex lg:mx-0 mx-auto lg:my-0 my-[5rem] lg:mb-0 mb-28 gap-10 flex-col sm:w-[30rem] ">
                    <div>
                        <h2 className="font-iconFont text-4xl">
                            Sign up to Kitchen House
                        </h2>
                    </div>

                    <div className=" sm:w-[30rem]">
                        <form className="flex flex-col gap-4 w-full">
                            <div className="flex items-center gap-3">
                                <div>
                                    <label
                                        className="text- text-black font-medium mr-auto"
                                        htmlFor="name">
                                        Name
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="border border-black/50 w-full p-2 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="text- text-black font-medium mr-auto"
                                        htmlFor="userName">
                                        Username
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="userName"
                                        id="userName"
                                        className="border border-black/50 w-full p-2 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="text- text-black font-medium mr-auto"
                                    htmlFor="email">
                                    Email
                                </label>
                                <br />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border border-black/50 w-full p-2 rounded-md"
                                />
                            </div>

                            <div>
                                <label
                                    className="text-left text-black font-medium mr-auto"
                                    htmlFor="password">
                                    Password
                                </label>
                                <br />
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="6+ characters"
                                    className="border border-black/50 w-full p-2 rounded-md"
                                />
                            </div>

                            <div>
                                <input
                                    type="checkbox"
                                    name="agreeWith"
                                    className="mr-1"
                                />
                                <label htmlFor="agreeWith">
                                    I agree with{` Dribbble's `}
                                    <span className="underline">
                                        Terms of Service
                                    </span>
                                    ,
                                    <span className="underline">
                                        Privacy Policy
                                    </span>
                                    , and default Notification Settings.
                                </label>
                            </div>

                            <div className="">
                                <BtnCustom>create account </BtnCustom>
                            </div>

                            <div>
                                <p className="font-light text-base">
                                    {" Don't have an account?"}
                                    <span className="underline">
                                        <Link to="/login">Sign up</Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
