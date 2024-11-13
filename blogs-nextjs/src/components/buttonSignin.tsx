"use client"

import { signinWithGoogle } from "@/libs/auth";

export default function ButtonSignIn(){
    return(
        <div>
            <button onClick={signinWithGoogle} className="btn btn-primary bg-black border-black text-white h-8 px-4 rounded-full">
                Sign in with google
            </button>
        </div>
    )
}