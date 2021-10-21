import { Estado } from "../../pages/panel2"
import { EditIcon, TrashIcon, ViewIcon } from "../icons"
import ButtonIcon from "../Navigation/ButtonIcon"

const ActionsComponent = (props) => {
    return (
        <div className="flex gap-1">
            <ButtonIcon onClick={() => props.setShowForm(new Estado(true,"edit",props.row.values))} >
                <EditIcon className="w-5 h-5" />
            </ButtonIcon>
            <ButtonIcon onClick={() => props.setShowForm(new Estado(true,"view",props.row.values))}>
                <ViewIcon className="w-5 h-5" />
            </ButtonIcon>
            <ButtonIcon>
                <TrashIcon className="w-5 h-5" />
            </ButtonIcon>
        </div>
    )
}

export default ActionsComponent
