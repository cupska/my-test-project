import LoveIcon from "@/components/ui/icon/love"
import Navbar from "@/components/ui/navbar"
import User from "@/components/utils/fetcherUser"
import LikedUser from "@/components/utils/likedUser"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// const getData = async (id) => {
//     const a = await User(id)
//     const b = await LikedUser(id)
//     return b
// } 

export default function UserDetail() {
    // const [likedUser, setLikedUser] = useState()
    const router = useRouter()
    const { id } = router.query
    const user = User(id)
    // const w = LikedUser(id)
    const likedUser = LikedUser(id)
    
    // useEffect(() => {
    // setLikedUser(w)
        
    // }, [])
    // console.log(like)
        // console.log(user, likedUser) 
    // console.log("id dari param ",id)
    
    if (user && likedUser) {
        return (
            <>
                <Navbar/>
                <div className="  h-screen flex justify-center items-center">
                    <div className=" relative  p-[5rem] flex max-sm:flex-col justify-center items-center gap-5 border border-slate-300 shadow-lg rounded-lg">
                        <div className=" rounded-lg overflow-hidden">
                            <img className=" sm:w-[200px]" src={user.avatar} alt=""/>
                        </div>
                        <div className=" flex flex-col">
                            <h2 className=" text-center sm:text-left">{user.first_name} {user.last_name}</h2>
                            <div>{user.email}</div> 
                        </div>
                        <div>{likedUser}</div>
                    </div>
                </div>
            </>
        )
    }
}

