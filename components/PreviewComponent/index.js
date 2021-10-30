import { memo, useContext, useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Slider from "react-slick";
import { Estado, PopupContext } from "../../context/PopupContext";
import { ExitIcon } from "../icons";
import { ButtonIcon } from "../Inputs";
import { CSSTransition } from "react-transition-group";

const PreviewComponent = () => {
  const { isShow, setShow } = useContext(PopupContext);
  const [features, setFeatures] = useState();

  useEffect(() => {
    isShow.data && setFeatures(isShow?.data);
  }, [isShow]);

  const labels = {
    agencia: "Agencia",
    propietario: "Propietario",
    categoria: "Categoría",
    fechaIncorporacion: "Fecha de incorporación",
    calle: "Calle",
    numero: "Número",
    piso: "Piso",
    apartamento: "Apartamento",
    torre: "Torre",
    entreCalle1: "Entre calle",
    entreCalle2: "Entre calle 2",
    ciudad: "Ciudad",
    codigoPostal: "Codigo Postal",
    telefono: "Telefono",
    codigoContestador: "Codigo Contestador",
    claveContestador: "Clave Contestador",
    encargado: "Encargado",
    telefonoEncargado: "Telefono encargado",
    superficie: "Superficie",
    capacidad: "Capacidad",
    ambientes: "Ambientes",
    camas: "Camas",
    mascotas: "Mascotas",
    comentarios: "Comentarios",
  };
  return (
    <ClickAwayListener onClickAway={() => setShow(false)}>
      <div className="relative bg-white  flex flex-col gap-2 shadow-md rounded-2xl md:w-1/2 xl:w-2/5  mx-5 md:mx-0 transition h-90 ">
        <span className="absolute z-30 top-3 right-3">
          <ButtonIcon onClick={() => setShow(false)}>
            <ExitIcon className="w-5 h-5" />
          </ButtonIcon>
        </span>
        <GalleryComponent images={features?.images} />
        <ul className="grid sm:grid-cols-3 gap-4 p-8 overflow-y-auto h-72">
          {features &&
            Object.entries(features).map(
              (item, idx) =>
                item[0] !== "images" && (
                  <li
                    key={idx}
                    className={`text-sm flex flex-col gap-1 ${
                      item[0] === "comentarios" ? "col-span-3 " : "..."
                    }`}
                  >
                    <span className="capitalize text-xs font-bold">
                      {labels[item[0]]}
                    </span>
                    {item[1]}
                  </li>
                )
            )}
        </ul>
      </div>
    </ClickAwayListener>
  );
};

export default PreviewComponent;

const GalleryComponent = memo(({ images }) => {
  return (
    <div className="grid grid-cols-1 w-full col-span-2 overflow-hidden rounded-xl">
      <Slider className="w-full" autoplay speed={200}>
        {images?.map((item, idx) => (
          <img
            lazy={true}
            key={idx}
            src={item.url}
            className="w-full h-72 object-cover object-center"
          />
        ))}
      </Slider>
    </div>
  );
});
