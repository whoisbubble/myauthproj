"use client";
import Link from "next/link";
import { useState } from "react"
import { login } from "@/lib/auth";

export default function Page(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="max-w-md mx-auto p-6 mt-10">
            <h1 className="text-xl font-bold text-center">Login</h1>
            <div className="border rounded-lg p-10 mt-5">
                <form className="space-y-3"
                onSubmit={async (e) => {
                    e.preventDefault();
                    
                    try{
                        const data = await login(email, password);
                        console.log("Server response:", data);
                    } catch (err) {
                        console.error("Login error:", err);
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
                        <button className="w-full border rounded-lg px-4 py-2 bg-black text-white">
                        Go!
                        </button>
                    </div>
                </form>
            <p className="font-semibold text-center pt-5">Нет аккаунта? Ну пох :) <Link className="underline" href="/register">Register</Link></p>
            </div>
        </div>
    )
}