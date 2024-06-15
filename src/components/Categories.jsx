export default function Categories() {
    return (
        <div className="flex w-full h-full items-start justify-start bg-background px-4 py-6 gap-8">
            <div className="h-full w-1/2 flex flex-col items-start justify-start gap-3 shadow-xl p-5 rounded-3xl">
                <h3 className="text-2xl font-semibold">Income Categories</h3>
                <div className="flex flex-col items-start justify-start gap-2 w-full h-auto">
                    <label htmlFor="income" className="font-semibold text-sm text-left">Income Category Name</label>
                    <input type="text" className="border-2 rounded-xl border-slate-100 pl-3 pr-3 h-10 w-96" />
                </div>
                <button type="submit" className="bg-primary h-auto w-auto py-3 px-5 font-semibold text-sm rounded-lg text-white hover:scale-110 transition-all">Submit</button>

            </div>
            <div className="h-full w-1/2 flex flex-col items-start justify-start gap-3 shadow-xl p-5 rounded-3xl">
                <h3 className="text-2xl font-semibold">Expense Categories</h3>
                <div className="flex flex-col items-start justify-start gap-2 w-full h-auto">
                    <label htmlFor="expense" className="font-semibold text-sm text-left">Expense Category Name</label>
                    <input type="text" className="border-2 rounded-xl border-slate-100 pl-3 pr-3 h-10 w-96" />
                </div>
                <button type="submit" className="bg-primary h-auto w-auto py-3 px-5 font-semibold text-sm rounded-lg text-white hover:scale-110 transition-all">Submit</button>

            </div>
        </div>
    );
}
