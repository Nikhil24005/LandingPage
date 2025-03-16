"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaLinkedin, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const mentors = [
    {
        name: "NAME",
        position: "POSITION",
        email: "mailto:example@gmail.com",
        linkedin: "https://www.linkedin.com/in/example",
        github: "https://github.com/example"
    },
    {
        name: "NAME",
        position: "POSITION",
        email: "mailto:example@gmail.com",
        linkedin: "https://www.linkedin.com/in/example",
        github: "https://github.com/example"
    },
    {
        name: "NAME",
        position: "POSITION",
        email: "mailto:example@gmail.com",
        linkedin: "https://www.linkedin.com/in/example",
        github: "https://github.com/example"
    }
];

const Card = () => {
    const swiperRef = useRef(null);

    return (
        <div className="bg-[#F1F1F1] p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center min-h-[300px] border-y border-black shadow-[inset_0_5px_4px_0_rgb(0_0_0_/_0.17)]">
            <h2 className="text-xl md:text-4xl font-bold text-black mb-12">FACULTY MENTORS</h2>

            <div className="block md:hidden relative w-full max-w-xs">
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10">
                    <button
                        className="bg-white border border-black w-8 h-8 flex items-center justify-center rounded-full hover:scale-105 transition"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <FaChevronLeft className="text-black" />
                    </button>
                </div>
                <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10">
                    <button
                        className="bg-white border border-black w-8 h-8 flex items-center justify-center rounded-full hover:scale-105 transition"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <FaChevronRight className="text-black" />
                    </button>
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Navigation]}
                    className="w-full"
                >
                    {mentors.map((mentor, index) => (
                        <SwiperSlide key={index}>
                            <CardItem mentor={mentor} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden md:flex gap-8 justify-center items-center w-full">
                {mentors.map((mentor, index) => (
                    <CardItem key={index} mentor={mentor} />
                ))}
            </div>
        </div>
    );
};

const CardItem = ({ mentor }) => (
    <div className="w-[270px] h-[370px] bg-white border border-black shadow-lg rounded-lg overflow-hidden flex flex-col group transition-all duration-300">
        <div className="h-[255px] bg-gray-500"></div>
        <div className="flex-1 text-center py-2 bg-white group-hover:bg-red-800 transition-colors duration-300">
            <p className="font-bold text-black text-xl group-hover:text-white">{mentor.name}</p>
            <p className="text-sm mb-3 group-hover:text-white">{mentor.position}</p>
        </div>
        <div className="flex justify-center gap-4 pb-3 bg-white group-hover:bg-red-800 transition-colors duration-300">
            <a href={mentor.email} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-black group-hover:border-white rounded-md group-hover:text-white">
                <MdEmail className="text-xl" />
            </a>
            <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-black group-hover:border-white rounded-md group-hover:text-white">
                <FaLinkedin className="text-xl" />
            </a>
            <a href={mentor.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-black group-hover:border-white rounded-md group-hover:text-white">
                <FaGithub className="text-xl" />
            </a>
        </div>
    </div>
);

export default Card;
