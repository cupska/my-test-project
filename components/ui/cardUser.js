import Image from "next/image"

export default function CardUser(props) {
    const { id, email, first_name, last_name, avatar} = props.data
    return (
        <div className=" w-[15rem] h-[15rem] flex flex-col justify-center items-center rounded-md border shadow-slate-300 shadow-lg ">
            <div className=" w-fit h-fit rounded-full overflow-hidden">
                <img src={avatar} alt=""/>
            </div>
            <div>
                <span>{email}</span>
            </div>
        </div>
    )
}