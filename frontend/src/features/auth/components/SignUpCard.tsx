import { AuthInputField } from "@/shared/ui";

export function SignUpCard() {
    return (
        <div className="rounded-md p-4 sm:p-8 md:p-12 font-sans flex flex-col max-w-md mx-auto bg-white shadow-md shadow-gray-300">
            <p className="text-gray-400 text-md mb-4 flex justify-center">Create Account</p>
            <AuthInputField type="email" label="Email" id="email"></AuthInputField>
            <AuthInputField type="password" label="Password" id="password"></AuthInputField>
            <AuthInputField type="password" label="Confirm Password" id="re-password"></AuthInputField>
            <button className="bg-gray-500 text-white p-2 rounded-sm">
                Sign Up
            </button>
        </div>
    );
}