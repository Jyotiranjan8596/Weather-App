import React from "react";
import Temperature from "./Temperature";
const MainPage = () => {
    return(
        <div className="bg-[#1f213A] align-top h-screen flex justify-center">
            <div className="w-1/5 h-1/3 mt-44">
                <Temperature/>
            </div>
            <div className="w-1/3 h-1/3 mt-44 bg-blue-900">
                Right Div
            </div>
        </div>
    )
}

export default MainPage;