"use client";
import Link from "next/link";
import { useState } from "react"
import { login } from "@/lib/auth";

export default function Page(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="max-w-md mx-auto p-6 mt-10">
            <h1 className="text-xl font-bold text-center">Login</h1>
            <div className="border rounded-lg p-10 mt-5">
                <form className="space-y-3"
                onSubmit={async (e) => {
                    e.preventDefault();
                    
                    setIsLoading(true);
                    try{
                        const data = await login(email, password);
                        console.log("Server response:", data);
                    } catch (err) {
                        console.error("Login error:", err);
                    } finally {
                        setEmail("");
                        setPassword("");

                        setIsLoading(false);
                    }
                }}>
                    <div>
                        <label>Email</label>
                        <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-lg px-3 py-2 w-full"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded-lg px-3 py-2 w-full"/>
                    </div>
                    <div className="pt-2">
                        <button type="submit"
                        disabled={isLoading} 
                        className="w-full border rounded-lg px-4 py-2 bg-transparent text-white
                        transition hover:opacity-50 active:opacity-80 disabled:opacity-20">
                            {isLoading ? "Loading..." : "Let's go, muthafuckka!"}
                        </button>
                    </div>
                </form>
            <p className="font-semibold text-center pt-5">Нет аккаунта? Ну пох :) <Link className="underline transition hover:opacity-50" href="/register">Register</Link></p>
            </div>
        </div>
    )
}