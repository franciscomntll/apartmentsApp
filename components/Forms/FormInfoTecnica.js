import {InputField, ToggleButton} from "../Inputs";

export const FormInfoTecnica = () => {
  return (
    <>
      <InputField
        label={"Superficie"}
        name={"superficie"}
        type={"number"}
        autoComplete={"off"}
        autoFocus
      />
      <InputField
        label={"Capacidad"}
        name={"capacidad"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Ambientes"}
        name={"ambientes"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Camas"}
        name={"camas"}
        type={"number"}
        autoComplete={"off"}
      />
      <ToggleButton
        label={"Mascotas permitidas"}
        name={"mascotas"}
        text={["no acepta", "si acepta"]}
      />
    </>
  );
};
