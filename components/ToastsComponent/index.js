import { useContext } from "react"
import { ToastContext } from "../../context/ToastContext"
import { ToastComponent } from "./Toast"

const ToastsComponent = () => {
    const {toasts} = useContext(ToastContext)
    return (
        <div className="fixed bottom-0 left-0 bg-transparent h-auto max-w-96 z-50 grid place-items-center p-6 gap-6">
            {toasts.map((item,idx) => (
                <ToastComponent key={idx} {...item} />
            ))}
        </div>
    )
}


export default ToastsComponent