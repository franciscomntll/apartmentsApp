import { Form, Formik } from "formik";
import Button from "../Button";
import CheckBox from "./CheckBox";
import InputField from "./InputField";
import ToggleButton from "./ToggleButton";

const FormCliente = ({ data, title, onCancel }) => {
  const initialValues= {
    nombre: "",
    categoria: "",
    precio: "",
    cantidad: "",
    activo : false
  }

  const titles = {
    create : "Crear",
    edit : "Editar",
    view : "Datos del"
  }
  return (
    <Formik initialValues={data.data ?? initialValues} onSubmit={() => {}}>
      <div className="w-full">
        <h2 className="text-lg font-bold w-full text-center pb-4 h-12">{data.type && `${titles[data.type]} cliente`} </h2>
        <Form className="grid grid-cols-2 gap-4">
          <InputField
            type={"text"}
            name={"nombre"}
            label={"Nombre"}
            disabled={data.type === "view" ? true : false}
          />
          <InputField
            type={"text"}
            name={"categoria"}
            label={"Categoria"}
            disabled={data.type === "view" ? true : false}
          />
          <InputField
            type={"number"}
            name={"precio"}
            label={"Precio"}
            disabled={data.type === "view" ? true : false}
          />
          <InputField
            type={"number"}
            name={"cantidad"}
            label={"Cantidad"}
            disabled={data.type === "view" ? true : false}
          />
          <ToggleButton
            name={"activo"}
            label={"¿Activo?"}
            disabled={data.type === "view" ? true : false}
          />
          <div className="w-full col-span-2 flex items-center justify-end gap-4">
            <Button variant="warning" type={"button"} onClick={onCancel}>
              Cancelar
            </Button>
            <Button variant="primary" type={"submit"}>
              Guardar
            </Button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default FormCliente;
