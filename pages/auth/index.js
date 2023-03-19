
export default function Auth({children}) {

    return (
        <div className=" max-w-screen-2xl 2xl:h-[50rem] h-screen m-auto flex justify-center bg-amber-400">
            <div className=" max-md:w-[100%] sm:px-7  flex flex-col justify-center items-center shadow-2xl shadow-slate-400 bg-white">
                <div className=" py-20 px-7 w-[90%] md:w-[100%] shadow-xl shadow-slate-300 border rounded-md border-slate-700 bg-white">
                    {children}
                </div>
            </div>
        </div>
    )
}