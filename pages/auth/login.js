import FetchLogin from "@/components/utils/fetcherLogin";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import Auth from ".";

export default function Login() {
    const {status, data, error, mutate} = useMutation(FetchLogin)
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

      const data = {
        email : event.target.email.value,
        password : event.target.password.value,
        }
        mutate(data)
    }

    if (status === "loading") return <h1>Locading....</h1>
    if (status === "error") console.log(error.massage)
    if (status === "success") { 
            sessionStorage.setItem('token', data.token);
            router.push("/")
    }

    return (
        <Auth>
            <h1 className=" text-center">Login</h1>
            <form className=" w-[25rem] flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="email">Email:</label>
                <input className=" input-field" type="email" id="email" value="eve.holt@reqres.in" readOnly name="email"/>

                <label htmlFor="password">Password:</label>
                <input className=" input-field" type="password" id="password" name="password" value="cityslicka" readOnly autoComplete="no"/>
                <button className=" btn mt-4" type="submit">submit</button>
            </form> 
        </Auth>
    )
}