"use client"

import { ReportModalProps } from "@/typings"
import { createReport } from "@/utils/createReport"
import { useRef, useState } from "react"
import { MdCancel } from "react-icons/md";
import {motion} from "framer-motion"
import { basicVariants } from "./variants/buttonVariants";

export const ReportModal = (props: ReportModalProps) => {

    const itemName = useRef<HTMLInputElement>(null)
    const itemDescription = useRef<HTMLInputElement>(null)
    const itemFound = useRef<HTMLInputElement>(null)
    const itemTime = useRef<HTMLInputElement>(null)
    const itemWhereFound = useRef<HTMLInputElement>(null)

    const [btnStatus,setBtnStatus] = useState("Create")    

    const onSubmit = () => {
        if(itemName && itemDescription && itemFound && itemTime && itemWhereFound){
            setBtnStatus("Process...")
            const [hours,minutes] = itemTime.current?.value.split(":") as string[]  
            const dateFound = new Date(itemFound.current?.value as string)

            dateFound.setHours(parseInt(hours))
            dateFound.setMinutes(parseInt(minutes))
            createReport({
                name: itemName.current?.value as string,
                description: itemDescription.current?.value as string,
                dateFound: dateFound.toISOString(),
                whereFound: itemWhereFound.current?.value as string,
                status: "",
            })
            .then((res:string) => {
                setBtnStatus(res)
            })
        }
    }

    return(
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.2)]">
            <section className="flex flex-col w-1/3 h-2/3 z-[2] p-5 bg-bg-secondary rounded-2xl gap-6">
                <div className="flex flex-row justify-between items-center px-5">
                    <h3 className="text-lg cursor-default select-none">Create report</h3>
                    <MdCancel className="cursor-pointer" size={25} onClick={props.closeModal}/>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="item-name">Item name</label>
                        <input
                        placeholder="Pencil" name="item-name"
                        className="focus:outline-bg-tertiary text-text-secondary w-full px-4 py-2 font-medium bg-transparent text-lg border rounded-xl border-gray-400"
                        type="text" ref={itemName}/>
                    </div>
                    <div>
                        <label htmlFor="item-description">Description</label>
                        <input
                        placeholder="It's wooden and yellowish" name="item-description"
                        className="focus:outline-bg-tertiary text-text-secondary w-full px-4 py-2 font-medium bg-transparent text-lg border rounded-xl border-gray-400"
                        type="text" ref={itemDescription}/>
                    </div>
                    <div>
                        <label htmlFor="item-date">Date</label>
                        <input
                        name="item-date"
                        className="focus:outline-bg-tertiary text-text-secondary w-full px-4 py-2 font-medium bg-transparent text-lg border rounded-xl border-gray-400"
                        type="date" ref={itemFound}/>
                    </div>
                    <div>
                        <label htmlFor="item-time">Approximate time</label>
                        <input
                        name="item-date"
                        className="focus:outline-bg-tertiary text-text-secondary w-full px-4 py-2 font-medium bg-transparent text-lg border rounded-xl border-gray-400"
                        type="time" ref={itemTime}/>
                    </div>
                    <div>
                        <label htmlFor="item-where">Where item was found</label>
                        <input
                        placeholder="Where found" name="item-where"
                        className="focus:outline-bg-tertiary text-text-secondary w-full px-4 py-2 font-medium bg-transparent text-lg border rounded-xl border-gray-400"
                        type="text" ref={itemWhereFound}/>
                    </div>
                    <motion.button 
                        variants={basicVariants} 
                        onClick={onSubmit} 
                        whileHover={"hover"}
                        whileTap={"tap"}
                        className="text-text-secondary font-semibold shadow-lg bg-btn-base px-5 py-2 rounded-2xl border-brd-secondary border-2">
                        {btnStatus}
                    </motion.button>
                </div>
            </section>
        </div>
    )
}