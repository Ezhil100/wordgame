 import React from "react";
import { RiCopperCoinFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

function TopBar() {
    return (
        <nav className="flex items-center justify-between bg-white rounded-full p-2 px-4">
            <div className="flex items-center gap-2">
                <RiCopperCoinFill className="h-[40px] w-[40px] text-cyan-500" />
                <div className=" font-Jacquarda">69</div>
            </div>
            <div className="flex items-center gap-2">
                <FaRegHeart className="h-[40px] w-[40px] text-red-500" />
                <div className=" font-Jacquarda">3</div>
            </div>
            <div className="flex items-center gap-2">
                <FaRegLightbulb className="h-[40px] w-[40px] text-yellow-400" />
                <div className=" font-Jacquarda">0</div>
            </div>
        </nav>
    );
}

export default TopBar;