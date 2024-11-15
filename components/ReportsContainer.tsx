"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import { ReportModal } from "./ReportModal"
createPortal

export const ReportsContainer = () => {
    const [reports, setReports] = useState(null)

    const [displayModal, setDisplayModal] = useState(false)

    return(
        <section className="flex flex-col w-2/5 bg-bg-primary p-5 rounded-3xl gap-3 text-center">
            <h2 className="text-text-secondary text-xl">Your reports</h2>
            {reports
            ? (<div></div>)
            : (<h3 className="text-text-secondary">You haven't reported anything yet...</h3>)}
            <button onClick={
                () => setDisplayModal(prev => !prev)
            }>Create report</button>
            {displayModal && createPortal(<ReportModal/>,document.body)}
        </section>
    )
}