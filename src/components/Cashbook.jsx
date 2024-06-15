export default function Cashbook() {
    return (
        <div className="flex w-full h-full flex-col items-start justify-start gap-5 bg-background px-4 py-6">
            <h1 className="text-5xl">Cashbook</h1>
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <table className="border-2 border-slate-100 w-full">
                    <thead>
                        <tr>
                            <th className="border-2 py-3 border-slate-100">Date</th>
                            <th className="border-2 py-3 border-slate-100">
                                Description
                            </th>
                            <th className="border-2 py-3 border-slate-100">Debit</th>
                            <th className="border-2 py-3 border-slate-100">
                                Credit
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}
