import CheckBox from "./CheckBox";

const FormComentarios = () => {
  return (
    <>
      <FeaturesComponent title={"Servicios"} />
      <FeaturesComponent title={"Nueva"} />
    </>
  );
};

export default FormComentarios;

// Comentarios: TextArea

// Seccion Servicios: Lista de checkbox
// Seccion Barrios : Lista de checkbox
// Seccion Proximidades: Lista de checkbox
// Seccion amenities: Lista de checkbox

const FeaturesComponent = ({ title, FeaturesList }) => {
  return (
    <div className="p-3 w-full">
      <h2 className="text-base font-bold text-sm">{title}</h2>
      <div className="grid w-full gap-8 py-4 sm:grid-cols-2 md:grid-cols-3">
        <CheckBox name={"servicios"} label={"servicios"} />
        <CheckBox name={"servicios1"} label={"servicios1"} />
        <CheckBox name={"servicios2"} label={"servicios2"} />
        <CheckBox name={"servicios3"} label={"servicios3"} />
      </div>
    </div>
  );
};
