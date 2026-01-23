import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png"

export function LandingNavbar() {
    return (
        <nav className="w-[100%] flex justify-center ">
            <div className="flex px-2 justify-between items-center shadow-md shadow-gray-300 w-full px-24">

                <div className="flex-1">
                    <img src={Logo} alt="logo" className="w-16" />
                </div>
                <div className="flex-auto hidden">

                </div>
                <div className="flex-1 flex pr-4 md:pr-0">
                    <button className="border border-black ml-auto">
                        <NavLink to="/login">Sign In</NavLink>
                    </button>
                </div>
            </div>
        </nav>
    );
}