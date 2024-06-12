import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="w-screen h-screen flex justify-center items-center overflow-hidden bg-background">
            <div className="h-auto w-[30rem] flex flex-col items-center gap-6 justify-center shadow-xl rounded-2xl p-7">
                <h2 className="text-2xl font-semibold text-center uppercase">Register</h2>
                <div className="flex flex-col gap-2 items-start justify-start w-full h-auto">
                    <label htmlFor="" className="font-semibold text-left text-sm">
                        Username
                    </label>
                    <input type="text" placeholder="Enter Username" className="h-10 w-full pl-3 rounded-lg border-2 border-slate-100" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full h-auto">
                    <label htmlFor="" className="font-semibold text-left text-sm">
                        Email
                    </label>
                    <input type="email" placeholder="Enter Email" className="h-10 w-full pl-3 rounded-lg border-2 border-slate-100" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full h-auto">
                    <label htmlFor="" className="font-semibold text-left text-sm">
                        Password
                    </label>
                    <input type="password" placeholder="Enter Password" className="h-10 w-full pl-3 rounded-lg border-2 border-slate-100" />
                </div>
                <div className="flex w-full h-auto flex-col items-center justify-center gap-5">
                    <button className="bg-primary h-auto w-auto uppercase px-5 py-3 text-white rounded-lg font-semibold hover:scale-110 transition-all">Login</button>
                    <Link to="/login">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
}
