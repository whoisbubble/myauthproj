export default function Page(){
    return (
        <div className="max-w-md mx-auto p-6 mt-10">
            <h1 className="text-xl font-bold text-center">Login</h1>
            <div className="border rounded-lg p-10 mt-5">
                <form className="space-y-3">
                    <div>
                        <label>Email</label>
                        <input type="email" className="border rounded-lg px-3 py-2 w-full"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" className="border rounded-lg px-3 py-2 w-full"/>
                    </div>
                    <div className="pt-2">
                        <button className="w-full border rounded-lg px-4 py-2 bg-black text-white">
                        Go!
                        </button>
                    </div>
                </form>
            <p className="font-serif text-center pt-5">Нет аккаунта? Ну пох :) <a className="underline" href="/register">Register</a></p>
            </div>
        </div>
    )
}