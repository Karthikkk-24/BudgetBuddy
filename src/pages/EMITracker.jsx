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
                    <label className="font-semibold text-sm">Duration</label>
                    <select name="duration" className="w-full h-12 border-2 border-slate-100 rounded-lg p-2" id="duration">
                        <option value="">Select Duration</option>
                        <option value="3m">3 Months</option>
                        <option value="6m">6 Months</option>
                        <option value="9m">9 Months</option>
                        <option value="1y">1 Year</option>
                        <option value="18m">18 Months</option>
                        <option value="2y">2 Years</option>
                        <option value="3y">3 Years</option>
                    </select>
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label className="font-semibold text-sm">Reminder Duration</label>
                    <select name="duration" className="w-full h-12 border-2 border-slate-100 rounded-lg p-2" id="duration">
                        <option value="">Select Reminder Duration</option>
                        <option value="1d">1 Day</option>
                        <option value="3d">3 Days</option>
                        <option value="5d">5 Days</option>
                        <option value="7d">7 Days</option>
                        <option value="1w">1 Week</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
