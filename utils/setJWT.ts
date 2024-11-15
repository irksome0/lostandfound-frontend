"use server"

import { JWT } from "@/typings"
import { cookies } from "next/headers"

export const setJWT = (data: JWT) => {
    cookies().set({
        name:"jwt",
        value:data.token,
        httpOnly:true,
        expires: new Date().setDate(new Date().getDate() + 1)
    })
}