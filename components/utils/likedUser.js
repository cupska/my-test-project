import { use, useEffect, useState } from "react"
import LoveIcon from "../ui/icon/love"
 
const GetValidation = (id) => {    
    if (typeof window !== "undefined" && id != undefined) {
        const local = window.localStorage.getItem(`likedUser${id}`)
        const validationId = Number(local)
        return validationId
    }
}

export default function LikedUser(id) {
    const [update, setUpdate] = useState(false)
    const getValidation = GetValidation(id)
    useEffect(() => {
        console.log("id dari getvalid:", getValidation)
    }, [getValidation])
    // console.log('id dari getvlid pure', getValidation)

    const like = async () => {
        console.log('btnnonLike diklik')
        const token = await window.localStorage.getItem('token');
        if (token === 'QpwL5tke4Pnpja7X4') {
        await window.localStorage.setItem(`likedUser${id}`, id)
        setUpdate(!update)
        } else alert("Login terlebih dahulu!")
    }
    const unlike = async () => {
        console.log('btnlike diklik')
        await window.localStorage.removeItem(`likedUser${id}`)
        setUpdate(!update)
    }
        
    if (getValidation == id) {
        console.log('btnlike')
        return (
        <button onClick={unlike} className=" btn-like h hover:bg-slate-200">
            <LoveIcon  color={"red"}/>
        </button>
        )
    } else {
        console.log('btnnonlik')
        return (
        <button onClick={like} className=" btn-like h hover:bg-slate-200">
            <LoveIcon color={"gray"}/>
        </button>
        )
    }
}

