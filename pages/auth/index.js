import Illustration from "@/components/ui/icon/illustration";

export default function Auth({children}) {

    return (
        <div className=" max-w-screen-2xl 2xl:h-[50rem] h-screen m-auto flex  bg-rose-50">
            <div className=" sm:w-1/2 bg-rose-200">
            </div>
            <div className=" sm:w-1/2 flex flex-col justify-center items-center bg-rose-300">
                <div className=" py-20 px-7 w-fit shadow-xl border rounded-md border-slate-700">
                    {children}
                </div>
            </div>
        </div>
    )
}