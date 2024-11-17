"use client"

import { ActiveReportModel } from "@/typings";
import { MdDelete } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { deleteReport } from "@/utils/deleteReport";
import { useState } from "react";

export const ReportContainer = (props: ActiveReportModel) => {
    
        const handleDelete = () => {
            deleteReport(props.report_id)
            .then((res:string) => res === "Success" ? setStatus(<MdCheck className="cursor-pointer" size={25}/>):"Error");
            ;
        }
    
    const [status, setStatus] = useState(<MdDelete className="cursor-pointer" size={25} onClick={handleDelete}/>)

    return(
        <section className="flex flex-col text-start w-full p-3 rounded-md gap-4 text-text-secondary border border-bg-secondary">
            <div className="flex flex-row justify-between items-center gap-4 border-b border-bg-secondary">
                <h3 className="text-lg"><b>Name:</b> {props.Item.item_name}</h3>
                <span><b>Date found: </b>{props.Item.date_found}</span>
                {!props.User ? status : ""}
            </div>
                <span className="border-b border-bg-secondary"><b>Description:</b> {props.Item.item_description}</span>
                <span><b>Where found:</b> {props.Item.where_found}</span>
                {props.User ? <span><b>Contact:</b> {props.User.phone_number}</span>:""}
        </section>
    )
}