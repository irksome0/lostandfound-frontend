"use server";

import { cookies } from "next/headers";
import {User} from "@/typings"

export const getUser = async () => {
    const jwt = cookies().get("jwt")
    if (jwt) {
        const response = await fetch("http://127.0.0.1:8800/api/user", {
            method: "GET",
            credentials:"include",
            headers: {
                "Cookie": `${jwt?.name}=${jwt?.value}`,
                "content-type": "application/json",
            }
        });
        const data = await response.json()
        return new Promise<User|string>((res) => data.message === "Session has been confirmed" 
        ? res({fullName:data.user.full_name, phoneNumber:data.user.phone_number, id:data.user.user_id,role:data.user.user_role}) 
        : res(data.message))
    }
    return new Promise<User|string>(res => res("Log in please"))
}