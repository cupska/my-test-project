import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import User from "../utils/fetcherUser"
import Check from "./icon/check"
import Cross from "./icon/cross"
import LoveIcon from "./icon/love"

export default function Navbar({children}) {
    const router = useRouter()
    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(window.localStorage.getItem('token'))
    }, [])
  

    const logOut = () => {
        try {
            localStorage.clear()
            router.reload()
        } catch (error) {
            console.log(error)
        }
    }
    // if (typeof window !== "undefined") {
    //     token = window.localStorage.getItem('token')
    // }
    // console.log(token)
    
    
    return (
        <div className=" fixed w-[100%] z-30 ">
            <div className="navbar-round sm:w-fit w-screen h-14 px-5 m-auto  flex items-center justify-center gap-5 overflow-hidden bg-white ring-1 ring-slate-300 shadow-lg  ">
                <div className=" w-20 font-bold"><Link href={"/"}>Beranda</Link></div>
                <div className=" p-10 rounded-full ring-1 ring-slate-300 shadow-lg shadow-slate-300"><LoveIcon/></div>
                <div className=" w-20 flex justify-center">
                    {token === 'QpwL5tke4Pnpja7X4' ? (
                        <button onClick={logOut} className=" check-icon-navbar  w-10 h-10 flex justify-center items-center bg-green-500 rounded-full">
                            <Check/>
                        </button>
                    ) : (
                        <Link href={"/auth/login"} >
                            <div className=" cross-icon-navbar w-10 h-10 flex justify-center items-center bg-red-500 rounded-full">
                                <Cross/>
                            </div>
                        </Link>
                    ) }
                </div>
            </div>
        </div>
    )
}