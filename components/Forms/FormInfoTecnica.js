import InputField from "./InputField";
import ToggleButton from "./ToggleButton";

const FormInfoTecnica = () => {
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

export default FormInfoTecnica;

// ******Seccion informacion tecnica******

// Superficie: Number
// Capacidad: Number
// Ambientes: Number
// Habitaciones: Number
// Camas: Number
// Mascotas permitidas: Checkbox
