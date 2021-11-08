import { useEffect, useState } from "react";
import Link from "next/link";
import { Form, Formik, useFormikContext } from "formik";
import { Button } from "../components/Inputs";
import {
  FormGeneral,
  FormUbicacion,
  FormComunicacion,
  FormInfoTecnica,
  FormPrecios,
  FormComentarios,
  FormImagenes,
} from "../components/Forms";
import { ArrowIcon, CrossIcon, SaveIcon, TrashIcon } from "../components/icons";
import {
  initialValues,
  validationSchema,
} from "../components/Forms/ValidationSchema";
import api from "../api";

const PanelComponent = (props) => {
  const [type, setType] = useState(props);
  const [phase, setPhase] = useState(0);
  const [imagePrincipal, setImagePrincipal] = useState({});
  useEffect(() => {
    setType(props);
  }, [props]);

  const phases = [
    { title: "General", component: <FormGeneral /> },
    { title: "Dirección", component: <FormUbicacion /> },
    { title: "Comunicación", component: <FormComunicacion /> },
    { title: "Info Tecnica", component: <FormInfoTecnica /> },
    { title: "Precios", component: <FormPrecios /> },
    { title: "Comentarios", component: <FormComentarios /> },
    {
      title: "Imagenes",
      component: (
        <FormImagenes setImagePrincipal={(file) => setImagePrincipal(file)} />
      ),
    },
  ];

  const handleSubmit = async (values, actions) => {
    const res = await api.saveApartments(values)
    console.log(res)
  }
  return (
    <Formik
      initialValues={type.type === "edit" ? type : initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <section>
        <Form>
          <Header type={type.type} image={imagePrincipal.image} />
          <div className="max-w-screen-lg mx-3 md:mx-auto inset-x-0 bg-white rounded-xl -mt-16">
            <Tabs set={(act) => setPhase(act)} state={phase} phases={phases} />
            {phases.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 grid ${
                  item.title === "Comentarios" ? "" : "md:grid-cols-2"
                } gap-6 ${phase === idx ? "block" : "hidden"}`}
              >
                {item.component}
              </div>
            ))}
          </div>
        </Form>
      </section>
    </Formik>
  );
};

export default PanelComponent;

const Tabs = ({ set, state, phases }) => {
  return (
    <div className="w-full flex items-center rounded-t-xl overflow-hidden overflow-x-auto">
      {phases.map((item, idx) => (
        <button
          key={idx}
          type={"button"}
          className={`flex items-center hover:bg-gray-500 hover:text-white  transition ${
            state == idx ? "bg-gray-500 text-white" : ""
          } px-4 py-4`}
          onClick={() => set(idx)}
        >
          <p className="text-sm w-max">{item.title}</p>
        </button>
      ))}
    </div>
  );
};

const Header = ({ image, type }) => {
  const { values, submitForm } = useFormikContext();
  return (
    <div className="bg-indigo-600 w-full pb-24 p-8  ">
      <div className="gap-4 flex flex-col max-w-screen-lg mx-auto inset-x-0">
        <Link href={"/"}>
          <span className="w-full text-white flex items-center gap-1 text-xs">
            <ArrowIcon className="w-4 h-4 text-white" />
            Apartamentos
          </span>
        </Link>
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-4">
            <img
              src={image}
              className="hidden md:block w-32 h-32 rounded bg-white object-cover object-center"
            />
            <span className="text-white flex flex-col">
              <h1 className=" text-xl">
                {values?.category?.title ?? "Tipo de inmueble"}
              </h1>
              <p className="hidden md:block text-xs text-light">
                {values?.agency?.title ?? "Agencia"}
              </p>
            </span>
          </div>
          <div className="flex items-center gap-4">
            {type !== "edit" ? (
              <Button type={"submit"} variant="secondary">
                Añadir nuevo departamento
              </Button>
            ) : (
              <>
                <Button type={"button"} variant="secondary" onClick={() => api.deleteApartments([type.id])}>
                  <TrashIcon className="w-5 h-5" />
                  Remover
                </Button>
                <Button type={"submit"} variant="secondary">
                <SaveIcon className="w-5 h-5" />
                  Guardar
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (context.query.id) {
    try {
      const { data } = await api.fetchApartmentByID(context.query.id);
      return {
        props: {
          ...context.query,
          ...data,
          agency: {
            id: data.agency.id,
            title: data.agency.description,
          },
          owner: {
            id: data.owner.id,
            title: `${data.owner.name} ${data.owner.lastname}`,
          },
          category: {
            id: data.category.id,
            title: data.category.name,
          },
        },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {},
      };
    }
  }
  return {
    props: {},
  };
}
