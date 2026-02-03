import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 600 },
];

export default function Chart() {
    return (
        <div className="w-full h-64">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
