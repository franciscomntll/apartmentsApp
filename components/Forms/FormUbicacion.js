import { InputField } from "../Inputs";

export const FormUbicacion = () => {
  return (
    <>
      <InputField
        label={"Calle"}
        name={"calle"}
        type={"text"}
        autoComplete={"off"}
        autoFocus
      />
      <InputField
        label={"Número"}
        name={"numero"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Piso"}
        name={"piso"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Apartamento"}
        name={"apartamento"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Torre"}
        name={"torre"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Entre calle 1"}
        name={"entreCalle1"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Entre calle 2"}
        name={"entreCalle2"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Ciudad"}
        name={"ciudad"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Codigo postal"}
        name={"codigoPostal"}
        type={"number"}
        autoComplete={"off"}
      />
    </>
  );
};

