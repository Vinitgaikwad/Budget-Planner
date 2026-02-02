export function ExpenseTable() {
    const expenses = [
        { id: 1, date: "20/10/2026", time: "13:45", method: "Cash", category: "Rent", amount: "$500" },
        { id: 2, date: "18/10/2026", time: "09:20", method: "Card", category: "Groceries", amount: "$85" },
        { id: 3, date: "17/10/2026", time: "20:10", method: "Card", category: "Dining", amount: "$42" },
        { id: 4, date: "16/10/2026", time: "08:15", method: "Online", category: "Internet", amount: "$60" },
        { id: 5, date: "15/10/2026", time: "19:30", method: "Cash", category: "Transport", amount: "$15" },
        { id: 6, date: "14/10/2026", time: "12:05", method: "Card", category: "Shopping", amount: "$120" },
        { id: 7, date: "13/10/2026", time: "07:50", method: "Online", category: "Utilities", amount: "$95" },
        { id: 8, date: "12/10/2026", time: "18:25", method: "Cash", category: "Entertainment", amount: "$30" },
        { id: 9, date: "11/10/2026", time: "14:10", method: "Card", category: "Fuel", amount: "$55" },
        { id: 10, date: "10/10/2026", time: "21:40", method: "Online", category: "Streaming", amount: "$12" },
    ];

    return (
        <div>
            <div className="grid grid-cols-5 items-center rounded-lg shadow-md shadow-brand-400 p-4 bg-brand-100 mb-4 relative">
                <p className="text-brand-500 font-semibold text-sm">Date</p>
                <p className="text-brand-500 font-semibold text-sm">Time</p>
                <p className="text-brand-500 font-semibold text-sm">Account</p>
                <p className="text-brand-500 font-semibold text-sm">Expense</p>
                <p className="text-brand-500 font-semibold text-sm">Amount</p>
                <button className="absolute right-4 -translate-y-[50%] top-1/2 text-brand-700">&#9660;</button>
            </div>
            {expenses.map((item) => {
                return <div className="grid grid-cols-5 items-center rounded-lg shadow-md shadow-brand-400 p-4 relative">
                    <p className="text-gray-500 text-sm">{item.date}</p>
                    <p className="text-gray-500 text-sm">{item.time}</p>
                    <p className="text-gray-500 text-sm">{item.category}</p>
                    <p className="text-gray-500 text-sm">{item.method}</p>
                    <p className="text-gray-500 text-sm">{item.amount}</p>
                    <button className="absolute right-4 -translate-y-[50%] top-1/2 text-gray-300">&#9660;</button>
                </div>
            })}
        </div>
    )
}