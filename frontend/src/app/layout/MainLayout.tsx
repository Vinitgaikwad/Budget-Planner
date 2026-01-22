import { MainNavbar } from "@/shared/components";
import { Outlet } from "react-router-dom";

export function MainLayout() {
    return (
        <>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
        </>
    );
}