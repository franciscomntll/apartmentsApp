import DataTable from "../components/Datatable"
import FormClientes from "../components/Forms/FormClientes"
import Header from "../components/Panel2/Header"

const panel2 = () => {
    return (
        <>
        <FormClientes />
        <div className="w-full">
            <Header type={"Cliente"}/>
            <div className="bg-white -mt-10 w-full mx-auto inset-x-0 max-w-screen-lg rounded-2xl p-4 shadow-md">
            <DataTable />

            </div>
        </div>
        </>
    )
}

export default panel2
