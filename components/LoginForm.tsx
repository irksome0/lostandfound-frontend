"use client"

import { SyntheticEvent, useState } from "react"
import {motion} from "framer-motion"
import { alternateButtonVariants } from "./variants/buttonVariants"
import { signIn } from "@/app/login/actions"
import { redirectTo } from "@/utils/redirectTo"

export const LoginForm = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const [passwordVisible, setPasswordVisible] = useState(false)

    const [formError, setFormError] = useState("");

    const handleSubmit = (e: Event | SyntheticEvent) => {
        e.preventDefault();
        signIn({phoneNumber, password})
        .catch(_res => redirectTo("/profile"))
        .catch(error => setFormError(error.message))
    }
    const handleDisplayPasswords = () => {
        setPasswordVisible(prev => !prev)
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4 py-10 bg-btn-secondary w-1/4 justify-center items-center rounded-xl shadow-lg">
            <h1 className="text-xl tracking-tighter text-text-secondary font-bold pb-6 border-brd-base border-b-2">Sign in your account!</h1>
            <div className="w-2/3 flex flex-col">
                <label className="text-text-secondary font-bold ms-1" htmlFor="phoneNumber">Phone number</label>
                <input
                className="rounded-md px-3 py-1 text-text-tertiary bg-btn-secondary font-medium focus:outline-brd-base"
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onInput={(e) => setPhoneNumber(e.currentTarget.value)}
            />
            </div>
            <div className="w-2/3 flex flex-col">
                <label className="text-text-secondary font-bold ms-1" htmlFor="password">Password</label>
                <input 
                className="rounded-md px-3 py-1 text-text-tertiary bg-btn-secondary font-medium focus:outline-brd-base" 
                type={passwordVisible ? "text" : "password"} 
                name="password"
                value={password}
                onInput={(e) => setPassword(e.currentTarget.value)}
                />
            </div>
            <div className="flex flex-row-reverse gap-3">
                <label htmlFor="showPassword" className="text-text-secondary">Show password</label>
                <input
                onInput={() => handleDisplayPasswords()}
                name="showPassword" 
                type="checkbox" 
                className="border-none outline-none bg-bg-primary"
                />
            </div>
            <motion.button
                variants={alternateButtonVariants} 
                type="submit"
                 whileHover={"hover"}
                 whileTap={"tap"}
                 className="text-text-primary font-semibold shadow-lg bg-btn-altBase px-5 py-2 rounded-2xl border-brd-base border-2 w-4/6">
                    Submit
                </motion.button>
                <span className="text-red-700 font-medium text-center">{formError}</span>
        </form>
    )
}