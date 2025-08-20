import React, { useState } from 'react';
import logo from "../assets/logo.png";
import decor from "../assets/decore lines.png";
import CarsData from './Car-Api';

export default function Car() {
    const menulist = [
        "DUESENBERG",
        "MERCEDES",
        "CITROEN",
        "CHEVROLET",
        "LINCOLN",
        "CADILLAC"
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);


    const handleClickAnywhere = () => {
        setSelectedIndex((prev) => (prev + 1) % CarsData.length);
    };

    return (
        <div
            onClick={handleClickAnywhere}
            className="w-screen h-screen flex bg-gray-900 text-white overflow-hidden transition-colors duration-500"
            style={{ backgroundColor: CarsData[selectedIndex].color }}
        >

            <div
                className="w-12 flex flex-col items-center shadow-2xl shadow-black transition-colors duration-500"
                style={{ backgroundColor: CarsData[selectedIndex].color }}
            >
                <div>
                    <img src={logo} alt="logo" className="w-full h-auto" />
                </div>

                <ul className="flex flex-col justify-around flex-1">
                    {menulist.map((item, index) => (
                        <li
                            key={index}
                            className="transform -rotate-90 text-[12px] tracking-widest hover:text-gray-400 cursor-pointer font-semibold"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-1 relative ">
                <div className="h-5 mt-7 w-full border border-slate-600 flex justify-end items-center gap-3 pr-22">
                    <span>. 01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                </div>

                <div className="absolute top-0 left-10 w-[1px] h-full bg-slate-600"></div>
                <div className="flex justify-center">
                    <div className="relative w-80 text-[15px] mt-7 border-t border-r border-slate-600 p-2">
                        <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder
                            text commonly used to demonstrate the visual form of a document or.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="ml-27 w-5 h-auto overflow-visible">
                        <img src={decor} alt="decore lines.png" />
                    </div>
                    <div
                        className="absolute ml-35 border-l border-slate-600"
                        style={{
                            top: "-50px",
                            height: "calc(100% + 150%)"
                        }}
                    ></div>
                </div>

                <div className="flex justify-center items-center h-full -mt-74 relative">
                    <span className="absolute w-[1200px] h-[900px] z-0 rounded-full"
                        style={{
                            background:
                                "radial-gradient(elipis at center, rgba(255,255,255,0.9) 0%, transparent 60%)"
                        }}></span>


                    {/* car image */}
                    <img
                        className="w-[500px] h-auto rounded-full transition-all duration-500 z-10"
                        src={CarsData[selectedIndex].image}
                        alt={CarsData[selectedIndex].name}
                    />
                </div>



                <div className='-mt-35 w-100'>
                    <p className='text-white text-[15px] ml-40 '>
                        form of a document or a typeface without relying on meaningful content.
                        Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>
                </div>
                <div className='border border-slate-500 w-[50%] h-[0px]'></div>

                <h1 className='text-white ml-39 font-bold text-3xl mt-2'>
                    CHEVROLET
                </h1>

                <div className="absolute top-1/2 right-0 text-right transform -rotate-90 wi">
                    <h2 className='text-center font-bold text-4xl'>CLASSIC CAR</h2>
                    <p className="text-[12px] wi">
                        The Charger ranked first in 13 U.S. states as the most searched collector car
                    </p>
                </div>
                <div className="absolute top-0 left-245 w-[1px] h-full bg-slate-600"></div>
            </div>
        </div>
    );
}
