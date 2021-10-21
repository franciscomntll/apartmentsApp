import { Form, Formik } from "formik";
import Button from "../Button";
import CheckBox from "./CheckBox";
import InputField from "./InputField";
import ToggleButton from "./ToggleButton";

const FormComponentDinamycal = ({data, list, title, onCancel,  }) => {
  return (
    <Formik initialValues={data?? {}} onSubmit={() => {}}>
      <div>
        <h2 className="text-lg font-bold w-full text-center pb-4">{title}</h2>
        <Form>
          <div className="grid md:grid-cols-2 gap-4">
            {list.map((item, idx) => {
              if (item.type === "text") {
                return (
                  <InputField
                    key={idx}
                    type={"text"}
                    name={item.name}
                    label={item.label}
                  />
                );
              } else if (item.type === "number") {
                return (
                  <InputField
                    key={idx}
                    type={"number"}
                    name={item.name}
                    label={item.label}
                  />
                );
              } else if (item.type === "checkbox") {
                return (
                  <CheckBox key={idx} name={item.name} label={item.label} />
                );
              } else if (item.type === "toggle") {
                return (
                  <ToggleButton key={idx} name={item.name} label={item.label} />
                );
              }
            })}
          </div>
          <div className="w-full pt-4 flex items-center justify-center gap-4">
          <Button variant="warning" type={"button"} onClick={onCancel}>Cancelar</Button>
          <Button variant="primary" type={"submit"}>Guardar</Button>

          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default FormComponentDinamycal;
