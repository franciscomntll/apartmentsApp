import InputField from "./InputField";

const FormComunicacion = () => {
  return (
    <>
      <InputField
        label={"Telefono"}
        name={"telefono"}
        type={"phone"}
        autoComplete={"off"}
        autoFocus
      />
      <InputField
        label={"Codigo contestador"}
        name={"codigoContestador"}
        type={"text"}
        autoComplete={"off"}
        autoFocus
      />
      <InputField
        label={"Clave contestador"}
        name={"claveContestador"}
        type={"text"}
        autoComplete={"off"}
        autoFocus
      />
      <InputField
        label={"Encargado"}
        name={"encargado"}
        type={"text"}
        autoComplete={"off"}
        autoFocus
      />
      <InputField
        label={"Telefono encargado"}
        name={"telefonoEncargado"}
        type={"text"}
        autoComplete={"off"}
        autoFocus
      />
      
    </>
  );
};

export default FormComunicacion;
