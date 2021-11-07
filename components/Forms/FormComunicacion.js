import { InputField } from "../Inputs";

export const FormComunicacion = () => {
  return (
    <>
      <InputField
        label={"Telefono"}
        name={"phonenumber"}
        type={"phone"}
        autoComplete={"off"}
        autoFocus
      />
      <InputField
        label={"Codigo contestador"}
        name={"codigoContestador"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Clave contestador"}
        name={"claveContestador"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Encargado"}
        name={"manager"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Telefono encargado"}
        name={"managerPhone"}
        type={"text"}
        autoComplete={"off"}
      />
      
    </>
  );
};


