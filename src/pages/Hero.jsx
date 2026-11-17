import React from "react";
import heroProducts from "../assets/hero.jpg";

const Hero = () => {
    return (
        <section className="mx-auto my-3 w-full max-w-[1600px] px-3 sm:my-5 sm:px-5 lg:px-10">
            <div
                className="relative overflow-hidden rounded-xl sm:rounded-2xl
                   h-[41.vh] min-[400px]:h-[45vh] sm:h-[50vh] md:h-[57.5vh]
                    lg:h-[67.5vh] xl:h-[75vh]"
                style={{
                    background:
                        " radial-gradient(ellipse at 75% 55%, rgba(239,68,68,0.40), transparent 60%), linear-gradient(110deg, #0f172a 0%, #1e293b 100%) ",
                }}
            >
                <div className=" flex h-full items-center gap-2 px-4 pb-4 sm:gap-4 sm:px-8 sm:pb-5 md:px-12 lg:px-16 xl:px-20 ">
                   
                    <div className=" min-w-0 flex-1 ">
                        <h1
                            className="text-balance font-bold leading-[1.1]
                             tracking-tight text-white
                             text-lg min-[400px]:text-xl sm:text-2xl 
                             md:text-3xl lg:text-4xl xl:text-5xl ">
                            Discover Amazing Products
                        </h1>

                        <p
                            className="mt-2 hidden max-w-md text-base text-white/80 lg:block">
                            Shop top-rated items across every category, delivered to your door.
                        </p>

                        <button
                            type="button"
                            className="mt-3 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-700

                            focus-visible:outline-2 focus-visible:outline-offset-2
                             focus-visible:outline-white
                            sm:mt-4 sm:px-6 sm:py-2.5 sm:text-sm lg:px-7 
                            lg:py-3 lg:text-base"
                        >
                            Shop Now →
                        </button>
                    </div>


                    <div
                        className="flex h-full w-[46%] items-center justify-center md:w-[52%]">
                        <img
                            src={heroProducts}
                            alt="Red shopping bags and a shopping cart"
                            className="max-h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
                        />
                    </div>
                </div>
                <div
                    className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-3 sm:gap-2.5
                     md:left-12 md:translate-x-0 lg:left-16 xl:left-20"
                    aria-hidden="true"
                >
                    <span
                        className="h-1.5 w-5 rounded-full
                         bg-blue-500 sm:h-2 sm:w-6">

                    </span>
                    <span
                        className="h-1.5 w-1.5 rounded-full
                         bg-white/70  sm:h-2 sm:w-2" >

                    </span>
                    <span
                        className="h-1.5 w-1.5 rounded-full
                         bg-white/70 sm:h-2 sm:w-2" >
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;