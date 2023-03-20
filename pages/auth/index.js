
export default function Auth({children}) {

    return (
        <div className=" max-w-screen-2xl h-screen m-auto flex justify-center items-center">
            <div className=" max-md:w-[100%] sm:h-screen 2xl:h-fit  sm:px-7 2xl:py-[10rem]  flex flex-col justify-center items-center shadow-2xl border shadow-slate-400 bg-white">
                <div className=" py-20 px-7 w-[90%] md:w-[100%] shadow-xl shadow-slate-300 border rounded-md border-slate-300 bg-white">
                    {children}
                </div>
            </div>
        </div>
    )
}