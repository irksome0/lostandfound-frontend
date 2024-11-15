"use client"

import Header from "@/components/Header"
import { RegisterForm } from "@/components/RegisterForm"
import { getUser } from "@/utils/getUser";
import { User } from "@/typings";
import { useEffect, useState } from "react";

export default function Register(){
    const [user,setUser] = useState<User|null>(null);

    useEffect(()=>{
        getUser()
        .then((response) => typeof response == "object" ? setUser(response) : "")
    },[])

    return(
        <div>
            <Header user={user}/>
            <main className="flex flex-col gap-5 items-center justify-center h-[80vh]">
                <RegisterForm/>
            </main>
        </div>
    )
}