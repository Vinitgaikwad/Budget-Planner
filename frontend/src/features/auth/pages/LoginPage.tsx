import { LoginCard } from "../components/LoginCard";

export function LoginPage() {
    return (
        <div
            className="flex justify-center md:items-center px-2 py-4 md:max-h-screen md:min-h-[500px] md:px-0 md:py-10 bg-gray-100"
        >
            <LoginCard></LoginCard>
        </div>
    );
}