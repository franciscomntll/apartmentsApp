import CheckBox from "../Inputs/CheckBox";
import { TextAreaField } from "../Inputs/TextAreaField";
import { FieldArray } from "formik";

export const FormComentarios = () => {
  const ListCheck = [
    { label: "servicio1", name: "servicio1" },
    { label: "servicio2", name: "servicio2" },
    { label: "servicio3", name: "servicio3" },
    { label: "servicio4", name: "servicio4" },
  ];

  const ListBarrios = [
    { label: "barrio1", name: "barrio1" },
    { label: "barrio2", name: "barrio2" },
    { label: "barrio3", name: "barrio3" },
    { label: "barrio4", name: "barrio4" },
    { label: "barrio5", name: "barrio5" },
  ];

  const ListProximidades = [
    { label: "Proximidad1", name: "Proximidad1" },
    { label: "Proximidad2", name: "Proximidad2" },
    { label: "Proximidad3", name: "Proximidad3" },
    { label: "Proximidad4", name: "Proximidad4" },
    { label: "Proximidad5", name: "Proximidad5" },
  ];

  const ListProximidades2 = [
    { label: "Proximidad1", name: "Proximidad1" },
    { label: "Proximidad2", name: "Proximidad2" },
    { label: "Proximidad3", name: "Proximidad3" },
    { label: "Proximidad4", name: "Proximidad4" },
    { label: "Proximidad5", name: "Proximidad5" },
  ];

  const Listamenities = [
    { label: "amenitie1", name: "amenitie1" },
    { label: "amenitie2", name: "amenitie2" },
    { label: "amenitie3", name: "amenitie3" },
    { label: "amenitie4", name: "amenitie4" },
    { label: "amenitie5", name: "amenitie5" },
  ];

  return (
    <>
      <FeaturesComponent title={"Servicios"} FeaturesList={ListCheck} />
      <FeaturesComponent title={"Barrios"} FeaturesList={ListBarrios} />
      <FeaturesComponent
        title={"Proximidades"}
        FeaturesList={ListProximidades}
      />
      <FeaturesComponent title={"Amenities"} FeaturesList={Listamenities} />
      <div className="col-span-2">
        <TextAreaField name={"comentarios"} label={"Comentarios"} />
      </div>
    </>
  );
};

const FeaturesComponent = ({ title, FeaturesList = [] }) => {
  return (
    <FieldArray name={title}>
      {({ insert, remove, push }) => (
        <div className="p-3 w-full">
          <h2 className="text-base font-bold text-sm">{title}</h2>
          <div className="grid w-full gap-8 py-4 sm:grid-cols-2 md:grid-cols-3  ">
            {FeaturesList.map((item, idx) => (
              <CheckBox
                key={idx}
                name={item.name}
                label={item.label}
                onChange={(e) =>
                  e.target.checked ? push(item.name) : remove(item.name)
                }
              />
            ))}
          </div>
        </div>
      )}
    </FieldArray>
  );
};
