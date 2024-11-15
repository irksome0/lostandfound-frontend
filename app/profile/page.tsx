"use client"

import { getUser } from "@/utils/getUser"
import { redirectTo } from "@/utils/redirectTo";
import { useEffect, useState } from "react"
import {User} from "@/typings"
import Header from "@/components/Header";
import { UserContainer } from "@/components/UserContainer";
import { ReportsContainer } from "@/components/ReportsContainer";

export default function Profile(){
    const [user,setUser] = useState<User|null>(null);

    useEffect(()=>{
        getUser()
        .then((response) => typeof response == "object" ? setUser(response) : redirectTo("/login"))
    },[])

    const test = () => {
        console.log(new Date().toISOString())
    }
    if (user){
        if (user?.role === "Administrator"){
          return(
            <div>
                <Header user={user}/>
            </div>
          )
        }
        return(
            <div>
                <Header user={user}/>
                <main>
                    <div className="flex flex-col gap-4">
                        <UserContainer user={user as User}/>
                        <ReportsContainer/>
                    </div>
                </main>
                <button onClick={() => test()}>Click</button>
            </div>
        )
    }
    return<></>
}