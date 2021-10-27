import {Button} from "../Inputs"

const PaginationMobile = () => {
    return (
        <div className="w-full flex justify-between lg:hidden">
            <Button variant={"secondary"}>Anterior</Button>
            <Button variant={"secondary"}>Siguiente</Button>
        </div>
    )
}

export default PaginationMobile

