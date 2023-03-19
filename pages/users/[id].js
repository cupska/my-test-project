import LoveIcon from "@/components/ui/icon/love"
import { useQuery } from "@tanstack/react-query"
import Error from "next/error"
import { useRouter } from "next/router"

async function FetcherUserId(id) {

    const response = await fetch(`https://reqres.in/api/users/${id}`)
    const datas = await response.json()
    console.log(datas)
    return datas
}

export default function User() {
    const router = useRouter()    
    const id = 2
    const {status, error, data} =  useQuery(['users', id], () => FetcherUserId(id))

    console.log(data)
    if (status === "loading") return <h1>Loading...</h1>
    if (status === "error") return <h1>error..</h1>
    if (status === "success") {
        const user = data.data
        return (
                <div className=" h-screen flex justify-center items-center">
                    <div className=" relative  p-[5rem] flex max-sm:flex-col gap-5 border border-slate-300 shadow-lg rounded-lg">
                        <div>
                            <img className=" sm:w-[200px]" src={user.avatar} alt=""/>
                        </div>
                        <div className=" flex  flex-col">
                            <h2>{user.first_name} {user.last_name}</h2>
                            <div>{user.email}</div>
                            <div className=" flex justify-center items-center flex-1"><LoveIcon/></div>
                        </div>
                    </div>
                </div>
    )}
}