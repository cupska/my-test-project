import Image from "next/image"
import Link from "next/link"
import LikedUser from "../utils/likedUser"

export default function CardUser(props) {
    const { id, email, first_name, last_name, avatar} = props.data
    const like = LikedUser(id)

    return (
        <div >
        <Link href={`/users/${id}`} className=" relative w-[15rem] h-[15rem] flex flex-col justify-center items-center rounded-md border shadow-slate-300 shadow-lg ">
            <div className=" relative rounded-full overflow-hidden">
                <img src={avatar} alt=""/>
            </div>
            <div>
                <span><h2>{first_name}</h2></span>
            </div>
        </Link>
            <div className=' absolute bottom-5 right-5 z-10'>
                    {like}
            </div>
        </div>
    )
}