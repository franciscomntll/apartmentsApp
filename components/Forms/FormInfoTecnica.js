import {InputField, ToggleButton} from "../Inputs";

export const FormInfoTecnica = () => {
  return (
    <>
      <InputField
        label={"Superficie"}
        name={"technicalData.area"}
        type={"number"}
        autoComplete={"off"}
        autoFocus
      />
      <InputField
        label={"Capacidad"}
        name={"technicalData.capacity"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Ambientes"}
        name={"technicalData.enviroments"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Habitaciones"}
        name={"technicalData.bedrooms"}
        type={"number"}
        autoComplete={"off"}
      />
      <InputField
        label={"Camas"}
        name={"technicalData.beds"}
        type={"number"}
        autoComplete={"off"}
      />
      <ToggleButton
        label={"Mascotas permitidas"}
        name={"petsAllowed"}
        text={["no acepta", "si acepta"]}
      />
    </>
  );
};
