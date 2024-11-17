"use client"

import { getUser } from "@/utils/getUser"
import { redirectTo } from "@/utils/redirectTo";
import { useEffect, useState } from "react"
import {User} from "@/typings"
import Header from "@/components/Header";
import { UserContainer } from "@/components/UserContainer";
import { ReportsContainer } from "@/components/ReportsContainer";
import { cookies } from "next/headers";
import { getReports } from "@/utils/getReports";
import { ReportsList } from "@/components/ReportsList";

export default function Profile(){
    const [user,setUser] = useState<User|null>(null);

    useEffect(()=>{
        getUser()
        .then((response) => typeof response == "object" ? setUser(response) : redirectTo("/login"))
    },[])

    const test = () => {
        getReports().then(res => console.log(res));
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
                <main className="flex flex-row gap-6">
                    <div className="flex flex-col gap-4 w-2/5">
                        <UserContainer user={user as User}/>
                        <ReportsContainer/>
                    </div>
                    <div className="w-3/5">
                        <ReportsList/>
                    </div>
                </main>
                {/* <button onClick={() => test()}>Click</button> */}
            </div>
        )
    }
    return<></>
}