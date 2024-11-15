"use client"

import { SyntheticEvent, useEffect, useState } from "react"
import {motion} from "framer-motion"
import { alternateButtonVariants } from "./variants/buttonVariants"
import { validatePassword } from "@/utils/validatePassword"


export const RegisterForm = () => {

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");    
    const [confPassword, setConfPassword] = useState("");

    const [formError, setFormError] = useState("");

    const [passwordVisible, setPasswordVisible] = useState(false)

    const handleSubmit = (e: Event | SyntheticEvent) => {
        e.preventDefault();
        // console.log(fullName, phoneNumber, password)
        if(validatePassword(password)){

        }
        const res = fetch("http://127.0.0.1:8800/api/register",{
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    full_name:fullName,
                    phoneNumber:phoneNumber,
                    password:password,
                })
        })
        .then(res => res.json())
        .then(data => console.log(data["message"]))
        .catch(err => setFormError(err))
    }
    const handleDisplayPasswords = () => {
        setPasswordVisible(prev => !prev)
    }

    useEffect(()=>{
        if(password && !confPassword){
            setFormError("You have to confirm your password!")
        }else if(password !== confPassword){
            setFormError("Passwords do not match!")
        }else{
            setFormError("")
        }
    },[password,confPassword])

    return(
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4 py-10 bg-btn-secondary w-1/4 justify-center items-center rounded-xl shadow-lg">
            <h1 className="text-xl tracking-tighter text-text-secondary font-bold pb-6 border-brd-base border-b-2">Create your account!</h1>
            <div className="w-2/3 flex flex-col">
                <label className="text-text-secondary font-bold ms-1" htmlFor="fullName">Full name</label>
                <input
                className="rounded-md px-3 py-1 text-text-tertiary bg-btn-secondary font-medium focus:outline-brd-base"
                type="text"
                name="fullName"
                value={fullName}
                onInput={(e) => setFullName(e.currentTarget.value)}
                />
            </div>
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
            <div className="w-2/3 flex flex-col">
                <label className="text-text-secondary font-bold ms-1" htmlFor="passwordConfirmation">Confirm password</label>
                <input 
                className="rounded-md px-3 py-1 text-text-tertiary bg-btn-secondary font-medium focus:outline-brd-base" 
                type="password"
                value={confPassword}
                onInput={(e) => setConfPassword(e.currentTarget.value)} 
                name="passwordConfirmation"/>
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
                disabled={!phoneNumber && !fullName && !validatePassword(password) && password !== confPassword} 
                type="submit"
                 whileHover={"hover"}
                 whileTap={"tap"}
                 className="text-text-primary font-semibold shadow-lg bg-btn-altBase px-5 py-2 rounded-2xl border-brd-base border-2 w-4/6 disabled:bg-btn-secondary">
                    Submit
            </motion.button>
            <span className="text-red-700">{formError}</span>
        </form>
    )
}