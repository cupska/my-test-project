import LoveIcon from "./icon/love"

export default function LikeBtn(props) {

    if (props.isLike) {
        return (
            <button onClick={unlike} className=" btn-like h hover:bg-slate-200">
                <LoveIcon  color={"red"}/>
            </button>
        )
    } else {
        return (
            <button onClick={unlike} className=" btn-like h hover:bg-slate-200">
                <LoveIcon  color={"red"}/>
            </button>
        )
    }
}