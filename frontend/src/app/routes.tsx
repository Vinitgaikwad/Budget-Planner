import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { LandingPageLayout } from "./layout/LandingPageLayout";
import { LoginPage, SignUpPage } from "@/features/auth";
import { AccountsPage } from "@/features/account";
import { BudgetPage } from "@/features/budget";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/dashboard/account',
                element: <AccountsPage />
            },
            {
                path: '/dashboard/budget',
                element: <BudgetPage />
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
