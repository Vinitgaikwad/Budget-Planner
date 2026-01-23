import { Outlet } from "react-router-dom";
import { Footer, LandingNavbar } from "@/shared/components";

export function LandingPageLayout() {
    return (
        <>
            <LandingNavbar></LandingNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}