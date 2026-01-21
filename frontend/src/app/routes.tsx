import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { AuthLayout } from "./layout/AuthLayout";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',

            }
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",

            },
            {
                path: "/signup",

            }
        ]
    }
]);
