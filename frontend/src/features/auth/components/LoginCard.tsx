import { AuthInputField } from "@/shared/ui";

export function LoginCard() {
    return (
        <div className="rounded-md p-4 sm:p-8 md:pb-12 font-sans flex flex-col max-w-md mx-auto bg-white shadow-md shadow-gray-300">
            <p className="text-brand-400 text-md mb-4 flex justify-center">User Login</p>
            <AuthInputField type="email" label="Email" id="email"></AuthInputField>
            <AuthInputField type="password" label="Password" id="password"></AuthInputField>
            <button className="bg-brand-500 text-white p-2 rounded-sm">
                Sign In
            </button>
        </div>
    );
}