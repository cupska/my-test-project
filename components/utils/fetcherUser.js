
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"

async function FetcherUserId(id) {
    const response = await fetch(`https://reqres.in/api/users/${id}`)
    const datas = await response.json()
    // console.log(datas)
    return datas
}
export default function User(id) {
    const {status, error, data} =  useQuery(['users', id],() => FetcherUserId(id))
    if (status === "loading") return <h1>Loading...</h1>
    if (status === "error") return <h1>{error}</h1>
    if (status === "success") {
        // console.log(data)
        return data.data
    }
}