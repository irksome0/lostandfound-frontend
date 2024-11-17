"use client"

import { useEffect, useState } from "react"
import { getActiveReports } from "@/utils/getActiveReports"
import { ActiveReportModel, ActiveReports} from "@/typings"
import { ReportContainer } from "./ReportContainer"

export const ReportsList = () => {
    const [reports, setReports] = useState<ActiveReports>({response:[]})

    useEffect(()=>{
        getActiveReports().then(res => setReports({response:res as ActiveReportModel[]}));
    },[])

    return(
        <section className="flex flex-col bg-bg-primary p-5 rounded-3xl gap-3 text-center">
            <h2 className="text-text-secondary text-xl">Dashboard</h2>
            <div className="flex flex-col h-[600px] max-h-[600px] gap-4 overflow-y-scroll">
                {reports["response"].length > 0
                ? (reports?.response.map(report => <ReportContainer User={report.User} report_id={report.report_id} Item={report.Item} report_date={report.report_date} report_status={report.report_status}/>))
                : (<h3 className="text-text-secondary">You haven't reported anything yet...</h3>)}
            </div>
        </section>
    )
}