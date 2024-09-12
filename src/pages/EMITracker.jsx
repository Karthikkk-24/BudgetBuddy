export default function EMITracker() {
    return (
        <div className="flex w-full h-full items-start justify-start gap-10 bg-background px-4 py-6 flex-col">
            <div className="flex items-center justify-center w-full h-auto gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label className="font-semibold text-sm">Date</label>
                    <input
                        type="date"
                        name="name"
                        id="name"
                        className="w-full h-12 border-2 border-slate-100 rounded-lg p-2"
                        required
                    />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label className="font-semibold text-sm">Date</label>
                    <input
                        type="date"
                        name="name"
                        id="name"
                        className="w-full h-12 border-2 border-slate-100 rounded-lg p-2"
                        required
                    />
                </div>
            </div>
        </div>
    );
}
