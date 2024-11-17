"use server"

import { cookies } from "next/headers"
import { ReportResponseModel } from "@/typings"
import { ReportsResponse } from "@/typings"

export const getReports = async () => {
    const jwt = cookies().get("jwt")
    
    const response = await fetch("http://127.0.0.1:8800/api/user/reports",{
        method:"get",
        headers: {
            "Cookie": `${jwt?.name}=${jwt?.value}`,
            "content-type": "application/json",
        }
    })
    const data = await response.json()
    const results:ReportsResponse = data["reports"].map((rep:any)=>{
        return{
            Item:{
                date_found: rep["Item"]["date_found"],
                item_description: rep["Item"]["item_description"],
                item_id: rep["Item"]["item_id"],
                item_name: rep["Item"]["item_name"],
                item_status: rep["Item"]["item_status"],
                where_found: rep["Item"]["where_found"],
            },
            report_id: rep["report_id"],
            report_date: rep["report_date"],
            report_status: rep["report_status"]
        }
    })
    return new Promise(res => res(results))
}