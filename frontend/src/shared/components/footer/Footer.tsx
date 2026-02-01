export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-6 px-6 md:pl-32 min-h-[130px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                <div className="pl-4">
                    <p className="text-sm font-medium">BudgetBuddy</p>
                    <p className="text-xs mt-2 text-gray-400 max-w-xs leading-relaxed">
                        Simple budgeting for real life. Finally understand where your money goes.
                    </p>
                </div>

                <div className="pl-4">
                    <p className="text-sm font-medium">Legal</p>
                    <p className="text-xs mt-2 text-gray-400">Disclaimer</p>
                    <p className="text-xs text-gray-400">Terms & Service</p>
                </div>

                <div className="pl-4">
                    <p className="text-sm font-medium">Contact Us</p>
                    <p className="text-xs mt-2 text-gray-400">+91 67899 08761</p>
                    <p className="text-xs text-gray-400">budgetbuddy@gmail.com</p>
                </div>

                <div className="pl-4">
                    <p className="text-sm font-medium">Follow Us</p>
                    <p className="text-xs mt-2 text-gray-400">Twitter · GitHub</p>
                    <p className="text-xs text-gray-500 mt-2">© 2026 BudgetBuddy</p>
                </div>

            </div>
        </footer>
    )
}