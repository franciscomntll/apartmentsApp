import { Form, Formik, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import FormGeneral from "../components/Forms/FormGeneral";
import FormUbicacion from "../components/Forms/FormUbicacion";
import { ArrowIcon } from "../components/icons";
import Link from "next/link";

const phases = [
  { title: "General", component: <FormGeneral /> },
  { title: "Dirección", component: <FormUbicacion /> },
  { title: "Comunicación", component: <FormComunicacion /> },
  { title: "Info Tecnica", component: <FormInfoTecnica /> },
  { title: "Precios", component: <FormPrecios /> },
  { title: "Comentarios", component: <FormComentarios /> },
];

const PanelComponent = () => {
  const [phase, setPhase] = useState(0);

  const initialValues = {
   
  };
  return (
    <Formik initialValues={initialValues} onSubmit={() => alert("hola")}>
      <section>
        <Header />
        <div className=" max-w-screen-lg mx-3 md:mx-auto inset-x-0 bg-white rounded-xl -mt-16">
          <Tabs set={(act) => setPhase(act)} state={phase} />
          <Form>
            {phases.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 grid md:grid-cols-2 gap-6 ${
                  phase === idx ? "block" : "hidden"
                }`}
              >
                {item.component}
              </div>
            ))}
          </Form>
        </div>
      </section>
    </Formik>
  );
};

export default PanelComponent;

const Tabs = ({ set, state }) => {
  return (
    <div className="w-full flex items-center rounded-t-xl overflow-hidden overflow-x-auto">
      {phases.map((item, idx) => (
        <button
          key={idx}
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

import FormComunicacion from "../components/Forms/FormComunicacion";
import FormInfoTecnica from "../components/Forms/FormInfoTecnica";
import FormPrecios from "../components/Forms/FormPrecios";
import FormComentarios from "../components/Forms/FormComentarios";

const Header = () => {
  const { values, submitForm } = useFormikContext();
  console.log(values);
  return (
    <div className="bg-gray-700 w-full pb-24 p-8  ">
      <div className="gap-4 flex flex-col max-w-screen-lg mx-auto inset-x-0">
        <Link href={"/"}>
          <span className="w-full text-white flex items-center gap-1 text-xs">
            <ArrowIcon className="w-4 h-4 text-white" />
            Apartamentos
          </span>
        </Link>
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden md:block w-16 h-16 rounded bg-white" />
            <span className="text-white flex flex-col">
              <h1 className=" text-lg">{values?.agencia}</h1>
              <p className="hidden md:block text-xs text-light">
                Detalles del apartamento
              </p>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="secondary">Remover</Button>
            <Button variant="primary">Guardar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
