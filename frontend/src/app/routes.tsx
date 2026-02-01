import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { LandingPageLayout } from "./layout/LandingPageLayout";
import { LoginPage, SignUpPage } from "@/features/auth";
import { AccountsPage } from "@/features/account";
import { BudgetPage } from "@/features/budget";
import { ExpensePage } from "@/features/expense";
import { AnalyticsPage } from "@/features/analytics";

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
            },
            {
                path: "/dashboard/expense",
                element: <ExpensePage />
            },
            {
                path: "/dashboard/analytics",
                element: <AnalyticsPage />
            },
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
