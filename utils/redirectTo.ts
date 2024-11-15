"use server";

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export const redirectTo = (path: string) => {

    revalidatePath(path, "layout")
    redirect(path)

}