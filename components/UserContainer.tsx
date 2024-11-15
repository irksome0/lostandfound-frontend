"use client"

import { UserContainerProps } from "@/typings"
import { useState } from "react"
import {motion} from "framer-motion"
import { redirectTo } from "@/utils/redirectTo"
import { basicVariants } from "./variants/buttonVariants"

export const UserContainer = (props: UserContainerProps) => {
    const [phoneNumber, setPhoneNumber] = useState(props.user.phoneNumber)
    const [fullName, setFullName] = useState(props.user.fullName)

    const [isEditing, setIsEditing] = useState(false)

    return(
        <section className="flex flex-col w-2/5 bg-bg-primary p-5 rounded-3xl gap-3 text-center">
            <h2 className="text-text-secondary text-xl">User information</h2>
            <div className="text-start">
                <label className="text-text-secondary px-4" htmlFor="fullName">Full name</label>
                <input 
                name="fullName"
                className="disabled:border-bg-primary text-text-secondary w-full px-4 py-2 font-medium bg-transparent text-lg border rounded-xl border-gray-400"
                type="text"
                disabled={!isEditing}
                value={fullName} 
                onInput={(e) => setFullName(e.currentTarget.value)}/>
            </div>
            <div className="text-start">
                <label className="text-text-secondary px-4" htmlFor="phoneNumber">Phone number</label>
                <input
                name="phoneNumber"
                className="disabled:border-bg-primary w-full text-text-secondary px-4 py-2 font-medium bg-transparent text-lg border rounded-xl border-gray-400"
                type="text"
                disabled={!isEditing}
                value={phoneNumber}
                onInput={(e) => setPhoneNumber(e.currentTarget.value)}/>
            </div>
            <motion.button 
                variants={basicVariants} 
                onClick={() => setIsEditing(prev => !prev)} 
                whileHover={"hover"}
                whileTap={"tap"}
                className="text-text-secondary font-semibold shadow-lg bg-btn-base px-5 py-2 rounded-2xl border-brd-secondary border-2">
                    {isEditing ? "Save" : "Update information"}
                </motion.button>
        </section>
    )
}