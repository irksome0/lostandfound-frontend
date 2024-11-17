"use server"

import { cookies } from "next/headers";

export const deleteReport = async (reportID:number) => {
        const jwt = cookies().get("jwt")
    if (jwt) {
        const response = await fetch("http://127.0.0.1:8800/api/delete-report", {
            method: "post",
            credentials:"include",
            headers: {
                "Cookie": `${jwt?.name}=${jwt?.value}`,
                "content-type": "application/json",
            },
            body:JSON.stringify({
                "report_id":reportID,
            })
        });
        const data = await response.json()
        console.log(data)
        return new Promise<string>((res) => data.message === "Report has been closed" 
        ? res("Success") 
        : res("Error"))
    }
    return new Promise<string>(res => res("Log in please"))
}