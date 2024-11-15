"use client"

import Link from "next/link";

import {motion} from "framer-motion"
import { redirectTo } from "@/utils/redirectTo";
import { alternateButtonVariants, basicVariants } from "./variants/buttonVariants";
import { HeaderProps } from "@/typings";
import { useState } from "react";
import { logOut } from "@/utils/logOut";


const Modal = () => {
    return(
        <motion.div
            className="absolute right-6 top-28 flex flex-col bg-bg-primary rounded-3xl p-4 items-center gap-4"
            initial={{"x":"10%","opacity":"10%"}}
            animate={{"x":"0%","opacity":"100%"}}
        >   
            <h2 className="select-none text-text-secondary">Menu</h2>
            <motion.button
                variants={alternateButtonVariants} 
                 onClick={() => {
                    redirectTo("/profile")
                    }
                } 
                 whileHover={"hover"}
                 whileTap={"tap"}
                 className="text-text-primary font-semibold shadow-lg bg-btn-altBase w-[100%] px-5 py-2 rounded-2xl border-brd-base border-2">
                    Profile
                </motion.button>
            <motion.button
                variants={alternateButtonVariants} 
                 onClick={() => {
                    logOut()
                    redirectTo("/")
                    }
                } 
                 whileHover={"hover"}
                 whileTap={"tap"}
                 className="text-text-primary font-semibold shadow-lg bg-btn-altBase w-[100%] px-5 py-2 rounded-2xl border-brd-base border-2">
                    Log out
                </motion.button>
        </motion.div>
    )
}

export default function Header(props:HeaderProps){
    const [showMenu, setShowMenu] = useState<boolean>(false);
    // px-28 py-6
    return(
        <header className="w-full rounded-3xl my-6 py-4 px-12 shadow-md bg-bg-primary justify-between flex flex-row">
            <Link href={"/"} className="text-xl font-bold text-text-secondary py-2">Lost&Found</Link>
            {props.user
            ?(  
                <>
                    <nav className="inline-flex gap-5 items-center">
                        <h1 onClick={() => setShowMenu(prev => !prev)} className="hover:underline select-none cursor-pointer text-text-secondary">{props.user.fullName}</h1>
                    </nav>
                    {showMenu
                    ? <Modal/>
                    : ""}
                </>
            )
            :(<nav className="inline-flex gap-5">
                <motion.button
                variants={alternateButtonVariants} 
                 onClick={() => redirectTo("/login")} 
                 whileHover={"hover"}
                 whileTap={"tap"}
                 className="text-text-primary font-semibold shadow-lg bg-btn-altBase px-5 py-2 rounded-2xl border-brd-base border-2">
                    Sign in
                </motion.button>
                <motion.button 
                variants={basicVariants} 
                onClick={() => redirectTo("/register")} 
                whileHover={"hover"}
                whileTap={"tap"}
                className="text-text-secondary font-semibold shadow-lg bg-btn-base px-5 py-2 rounded-2xl border-brd-secondary border-2">
                    Sign up
                </motion.button>
            </nav>)
            }
        </header>
    )
}