import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { LandingPageLayout } from "./layout/LandingPageLayout";
import { LoginPage } from "@/features/auth";
import { SignUpPage } from "@/features/auth/pages/SignUpPage";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/dashboard',

            }
        ]
    },
    {
        element: <LandingPageLayout />,
        children: [
            {
                path: '/',

            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/signup",
                element: <SignUpPage />
            }
        ]
    }
]);
