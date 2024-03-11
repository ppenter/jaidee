import React from 'react';

export default function Page() {
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
        {/* Login Card */}
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-6xl font-bold">Login</h1>
            <form className="flex flex-col justify-center items-center gap-4">
            <input className="border p-2" type="text" placeholder="Username" />
            <input className="border p-2" type="password" placeholder="Password" />
            <button className="border p-2">Login</button>
            </form>
            </div>
      </div>
    )
}