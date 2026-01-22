import { Outlet } from "react-router-dom";
import { LandingNavbar } from "@/shared/components";

export function LandingPageLayout() {
    return (
        <>
            <LandingNavbar></LandingNavbar>
            <Outlet></Outlet>
        </>
    );
}