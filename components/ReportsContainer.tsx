"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import {motion} from "framer-motion"
import { ReportModal } from "./ReportModal"
import { basicVariants } from "./variants/buttonVariants"
import { getReports } from "@/utils/getReports"
import { ReportModalProps, ReportResponseModel, ReportsResponse } from "@/typings"
import { ReportContainer } from "./ReportContainer"

export const ReportsContainer = () => {
    const [reports, setReports] = useState<ReportsResponse>({response:[]})

    const [displayModal, setDisplayModal] = useState(false)

    useEffect(()=>{
        getReports().then(res => setReports({response:res as ReportResponseModel[]}));
    },[])

    return(
        <section className="flex flex-col bg-bg-primary p-5 rounded-3xl gap-3 text-center">
            <h2 className="text-text-secondary text-xl">Your reports</h2>
            <div className="flex flex-col h-60 max-h-60 gap-4 overflow-y-scroll">
                {reports["response"].length > 0
                ? (reports?.response.map(report => <ReportContainer report_id={report.report_id} Item={report.Item} report_date={report.report_date} report_status={report.report_status}/>))
                : (<h3 className="text-text-secondary">You haven't reported anything yet...</h3>)}
            </div>
            <motion.button 
                variants={basicVariants} 
                onClick={ () => setDisplayModal(prev => !prev)} 
                whileHover={"hover"}
                whileTap={"tap"}
                className="text-text-secondary font-semibold shadow-lg bg-btn-base px-5 py-2 rounded-2xl border-brd-secondary border-2">
                    Create report
                </motion.button>
            {displayModal && createPortal(<ReportModal closeModal={() => setDisplayModal(false)}/>,document.body)}
        </section>
    )
}