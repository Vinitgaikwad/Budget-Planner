import { Outlet } from "react-router-dom";
import { NavBar } from "../Navbar/Navbar";


export function MainLayout() {
    return (
        <main>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </main>
    );
}