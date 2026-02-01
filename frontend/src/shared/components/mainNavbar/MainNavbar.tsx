import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png"

export function MainNavbar() {
    return (
        <nav className="w-[100%] flex justify-center min-w-md">
            <div className="flex justify-between items-center shadow-md shadow-gray-300 w-full md:px-24 lg:px-32">

                <div className="flex-1">
                    <NavLink to='/'>
                        <img src={Logo} alt="logo" className="w-16" />
                    </NavLink>
                </div>
                <div className="hidden md:flex justify-between items-center flex-row flex-auto  ">
                    <NavLink
                        to="/dashboard/account"
                        className={({ isActive }) =>
                            isActive ? "text-brand-600" : "text-gray-400"
                        }
                    >
                        Accounts
                    </NavLink>

                    <NavLink
                        to="/dashboard/budget"
                        className={({ isActive }) =>
                            isActive ? "text-brand-600" : "text-gray-400"
                        }
                    >
                        Budget
                    </NavLink>

                    <NavLink
                        to="/dashboard/expense"
                        className={({ isActive }) =>
                            isActive ? "text-brand-600" : "text-gray-400"
                        }
                    >
                        Expenses
                    </NavLink>

                    <NavLink
                        to="/dashboard/analytic"
                        className={({ isActive }) =>
                            isActive ? "text-brand-600" : "text-gray-400"
                        }
                    >
                        Analytics
                    </NavLink>
                </div>
                <div className="flex-1 flex pr-4 md:pr-0">
                    <button className="text-md text-brand-600 font-thin border border-brand-400 ml-auto px-3 py-1 rounded-md -translate-y-[4px]">
                        <NavLink to="/login">Sign In</NavLink>
                    </button>
                </div>
            </div>
        </nav>
    );
}