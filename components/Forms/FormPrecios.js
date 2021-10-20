import InputField from "./InputField";
import ToggleButton from "./ToggleButton";

const FormPrecios = () => {
  return (
    <>
      <InputField
        label={"Estadia minima"}
        name={"estadiaMinima"}
        type={"number"}
        autoComplete={"off"}
        autoFocus
      />

      <InputField
        label={"Estadia maxima"}
        name={"estadiaMaxima"}
        type={"number"}
        autoComplete={"off"}
      />

      <InputField
        label={"Estadia maxima"}
        name={"estadiaMaxima"}
        type={"number"}
        autoComplete={"off"}
      />

      <InputField
        label={"Precio semana propietario"}
        name={"semanaPropietario"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />

      <InputField
        label={"Precio quincena propietario"}
        name={"quincenaPropietario"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
      <InputField
        label={"Precio mensual propietario"}
        name={"quincenaPropietario"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
      <InputField
        label={"Precio semana renta"}
        name={"semanaRenta"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
      <InputField
        label={"Precio quincena renta"}
        name={"quincenaRenta"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
      <InputField
        label={"Precio mensual renta"}
        name={"mensualRenta"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
    </>
  );
};

export default FormPrecios;
