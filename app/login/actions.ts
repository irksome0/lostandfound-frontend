
import { signInProps } from "@/typings";
import { setJWT } from "@/utils/setJWT";

export const signIn = async (props: signInProps): Promise<string> => {
    try {
        const response = await fetch("http://127.0.0.1:8800/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                phoneNumber: props.phoneNumber,
                password: props.password,
            }),
        });

        const data = await response.json();

        if (data.message === "Successful login!") {
            setJWT({ token: data.access_token });
            return "Success";
        } else {
            throw new Error(data.message);
        }
    } catch (error:any) {
        return Promise.reject(error);
    }
};
