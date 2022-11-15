import { MouseEventHandler } from "react"


interface Props {
    onClickOutside: MouseEventHandler
    children: React.ReactElement
}

const Modal = ({ onClickOutside, children }: Props) => {
 
    return (
        <div className="fixed h-screen w-screen top-0 left-0 bg-black/60 z-50"
            onClick={onClickOutside}>
            { children }
        </div>
    )
}

export default Modal