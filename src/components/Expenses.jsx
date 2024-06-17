export default function Expenses() {
    return (
        <div className="flex w-full h-full items-start justify-start gap-10 bg-background px-4 py-6 flex-col">
            <h1 className="text-5xl">Expenses</h1>
            <div className="flex flex-col items-start justify-start w-full h-auto gap-4">
                <div className="flex items-center justify-center w-full h-auto gap-6">
                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                        <label className="font-semibold text-sm">
                            Select Expense Category
                        </label>
                        <select
                            name="category"
                            id="category"
                            className="w-full h-12 border-2 border-slate-100 rounded-lg p-2"
                            required
                        >
                            <option value="">Select Expense Category</option>
                        </select>
                    </div>
                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                        <label className="font-semibold text-sm">
                            Enter Amount
                        </label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            className="w-full h-12 border-2 border-slate-100 rounded-lg p-2"
                            required
                        />
                    </div>
                </div>
                <button className="w-auto h-auto hover:scale-110 transition-all bg-primary rounded-lg text-white px-5 py-3 flex items-center justify-center gap-1">
                    Submit
                </button>
            </div>
        </div>
    );
}
