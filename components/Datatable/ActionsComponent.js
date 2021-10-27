import { useContext } from "react"
import { Estado, PopupContext } from "../../context/PopupContext"
import { EditIcon, TrashIcon, ViewIcon } from "../icons"
import { ButtonIcon } from "../Inputs"

const ActionsComponent = (props) => {
    const {setShow} = useContext(PopupContext)
    return (
        <div className="flex gap-1">
            <ButtonIcon onClick={() => setShow(new Estado(true,"edit",props.row.values))} >
                <EditIcon className="w-5 h-5" />
            </ButtonIcon>
            <ButtonIcon onClick={() => setShow(new Estado(true,"view",props.row.values))}>
                <ViewIcon className="w-5 h-5" />
            </ButtonIcon>
            <ButtonIcon onClick={() => {
                props.HandleRemove(props.row.original.id)
            }}>
                <TrashIcon className="w-5 h-5" />
            </ButtonIcon>
        </div>
    )
}

export default ActionsComponent
