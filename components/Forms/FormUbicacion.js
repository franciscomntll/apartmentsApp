import { InputField } from "../Inputs";

export const FormUbicacion = () => {
  return (
    <>
      <InputField
        label={"Calle"}
        name={"address.street"}
        type={"text"}
        autoComplete={"off"}
        autoFocus
      />
      <InputField
        label={"Número"}
        name={"address.number"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Piso"}
        name={"address.floor"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Apartamento"}
        name={"address.apartment"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Torre"}
        name={"address.tower"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Entre calle 1"}
        name={"address.between1"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Entre calle 2"}
        name={"address.between2"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Ciudad"}
        name={"address.city"}
        type={"text"}
        autoComplete={"off"}
      />
      <InputField
        label={"Codigo postal"}
        name={"address.postalCode"}
        type={"number"}
        autoComplete={"off"}
      />
    </>
  );
};

