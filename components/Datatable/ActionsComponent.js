import { EditIcon, TrashIcon, ViewIcon } from "../icons"
import ButtonIcon from "../Navigation/ButtonIcon"

const ActionsComponent = () => {
    return (
        <div className="flex gap-1">
            <ButtonIcon>
                <EditIcon className="w-5 h-5" />
            </ButtonIcon>
            <ButtonIcon>
                <ViewIcon className="w-5 h-5" />
            </ButtonIcon>
            <ButtonIcon>
                <TrashIcon className="w-5 h-5" />
            </ButtonIcon>
        </div>
    )
}

export default ActionsComponent
