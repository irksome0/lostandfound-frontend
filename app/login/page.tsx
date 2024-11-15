"use client"

import Header from "@/components/Header"
import { LoginForm } from "@/components/LoginForm"
import { getUser } from "@/utils/getUser";
import { useEffect } from "react";
import { redirectTo } from "@/utils/redirectTo";

export default function Login(){
    useEffect(()=>{
        getUser()
        .then((response) => typeof response == "object" ?  redirectTo("/profile") : "")
    },[])

    return(
        <div>
            <Header user={null}/>
            <main className="flex flex-col gap-5 items-center justify-center h-[80vh]">
                <LoginForm/>
            </main>
        </div>
    )
}