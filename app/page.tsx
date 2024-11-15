"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { redirectTo } from "@/utils/redirectTo";
import {motion} from "framer-motion"
import { alternateButtonVariants } from "@/components/variants/buttonVariants";
import { User } from "@/typings";
import { getUser } from "@/utils/getUser";

export default function Home() {
  const [user,setUser] = useState<User|null>(null);

    useEffect(()=>{
        getUser()
        .then((response) => typeof response == "object" ? setUser(response) : "")
    },[])
  return (
    <div>
      <Header user={user}/>
      <main className="flex flex-row h-[80svh] items-center justify-between px-32 pt-10 gap-10">
        <section className="flex flex-col w-2/3 gap-8">
          <h1 className="text-3xl font-bold capitalize tracking-tighter">
            Welcome to Lost&Found Management!
          </h1>
          <span className="tracking-wide text-lg font-medium">
              We understand the frustration of losing something valuable.<br/>
            Whether it&apos;s a cherished personal item or an important document, we&apos;re here to help you find it.<br/>
              Our platform connects finders and owners quickly and efficiently,
            making the process of reporting and recovering lost items as seamless as possible.
          </span>
          <div className="text-lg text-text-quaternary italic w-5/6 py-2">
            Join our community today and turn those “lost” moments into “found” successes!
          </div>
          <motion.button
            variants={alternateButtonVariants} 
              onClick={() => redirectTo("/register")} 
              whileHover={"hover"}
              whileTap={"tap"}
              className="text-text-primary font-semibold shadow-lg bg-btn-altBase px-5 py-2 rounded-2xl border-brd-base border-2">
                Join!
          </motion.button>
        </section>
        <section className="bg-btn-secondary shadow-lg p-5 rounded-xl flex flex-col gap-3 text-text-secondary w-1/3">
         <h1 className="text-2xl font-bold p-2">Here&apos;s what you can do:</h1>
          <dl className="px-3">
            <dt className="text-lg font-black">Report a Lost Item</dt>
            <dd className="text-base">Fill out a quick form to let our community know what you&apos;ve lost and where you last had it.</dd>

            <dt className="text-lg font-black">Report a Found Item</dt>
            <dd className="text-base">Found something that doesn&apos;t belong to you? Help someone out by reporting it here.</dd>

            <dt className="text-lg font-black">Search and Match</dt>
            <dd className="text-base">Use our advanced search filters to find lost items or check for matches with found items.</dd>
          
            <dt className="text-lg font-black">Get Notifications</dt>
            <dd className="text-base">Receive real-time updates when there&apos;s a match or when new items are reported.</dd>
          </dl>
        </section>
      </main>
    </div>
  );
}
