"use server"

import { cookies } from "next/headers";

export const updateUser = async (fullName: string, phoneNumber: string) => {
    const jwt = cookies().get("jwt")
    if (jwt) {
        const response = await fetch("http://127.0.0.1:8800/api/user/update", {
            method: "post",
            credentials:"include",
            headers: {
                "Cookie": `${jwt?.name}=${jwt?.value}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "full_name":fullName,
                "phone_number":phoneNumber
            }),
        });
        const data = await response.json()
        return new Promise<string>((res) => data.message === "Data has been updated" 
        ? res("Success") 
        : res("Error"))
    }
    return new Promise<string>(res => res("Log in please"))
}