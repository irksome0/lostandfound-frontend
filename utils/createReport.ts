"use server"

import { ReportModel } from "@/typings";
import { cookies } from "next/headers";

export const createReport = async (props: ReportModel)  => {
    const jwt = cookies().get("jwt")
    if (jwt) {
        const response = await fetch("http://127.0.0.1:8800/api/report", {
            method: "post",
            credentials:"include",
            headers: {
                "Cookie": `${jwt?.name}=${jwt?.value}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "item":{
                "name": props.name,
                "description": props.description,
                "time": props.dateFound,
                "where_found": props.whereFound,
                "status": "Lost",
                },
                "status": "Lost",
            }),
        });
        const data = await response.json()
        return new Promise<string>((res) => data.message === "Report has been successfully created!" 
        ? res("Success") 
        : res("Error"))
    }
    return new Promise<string>(res => res("Log in please"))
}