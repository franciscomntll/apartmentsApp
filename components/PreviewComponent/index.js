import { memo, useContext, useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Estado, PopupContext } from "../../context/PopupContext";
import { DownloadFile, ExitIcon } from "../icons";
import { ButtonIcon } from "../Inputs";
import { CSSTransition } from "react-transition-group";
import dayjs from "dayjs";
import Slider from "../Slider";

const PreviewComponent = () => {
  const { isShow, setShow } = useContext(PopupContext);
  const [features, setFeatures] = useState();

  useEffect(() => {
    if (isShow.data) {
      console.log(isShow.data);
      setFeatures(isShow.data);
    }
  }, [isShow]);

  return (
    <ClickAwayListener onClickAway={() => setShow(false)}>
      <div className="relative bg-white max-h-5/6 h-5/6 max-w-3/4 w-3/4 shadow-md rounded-2xl grid grid-cols-2 overflow-hidden">
        <span className="absolute z-30 top-3 right-3">
          <ButtonIcon onClick={() => setShow(false)}>
            <ExitIcon className="w-5 h-5" />
          </ButtonIcon>
        </span>

        <div className="w-full flex items-center flex-col overflow-auto h-full ">
          <div className="flex items-center justify-between w-full px-4 py-6">
          <h2 className="font-bold text-gray-300 text-3xl ">Vista previa</h2>
          <span className="items-center flex text-gray-700">
          <small>Descargar PDF</small>
          <ButtonIcon>
            <DownloadFile className="text-gray-700 w-6 h-6" />
          </ButtonIcon>
          </span>

          </div>
          <div className="w-full">
            <Title text={"Info General"} />
            <div className="grid grid-cols-3 text-sm gap-6 w-full text-center p-3 ">
              <FieldView label="Agencia" value={features?.agency?.description} />
              <FieldView label="Propietario" value={`${features?.owner?.name} ${features?.owner?.lastname}`} />
              <FieldView label="Categoria" value={features?.category?.name} />
              <FieldView label="Fecha de Incoporacion" value={dayjs(features?.incorporationDate).format("DD-MM-YYYY")} />
            </div>
          </div>
          <div className="w-full">
            <Title text={"Ubicación"} />
            <div className="grid grid-cols-3 text-sm gap-6 w-full text-center p-3 ">
            <FieldView label="Calle" value={features?.address?.street} />
            <FieldView label="Numero" value={features?.address?.number} />
            <FieldView label="Piso" value={features?.address?.floor} />
            <FieldView label="Apartamento" value={features?.address?.apartment} />
            <FieldView label="Torre" value={features?.address?.tower} />
            <FieldView label="Entre calle 1" value={features?.address?.between1} />
            <FieldView label="Entre calle 2" value={features?.address?.between2} />
            <FieldView label="Ciudad" value={features?.address?.city} />
            <FieldView label="Codigo Postal" value={features?.address?.postalCode} />
            </div>
          </div>
          <div className="w-full">
            <Title text={"Comunicación"} />
            <div className="grid grid-cols-3 text-sm gap-6 w-full text-center p-3 ">
            <FieldView label="Telefono" value={features?.phonenumber} />
            <FieldView label="Codigo Contestador" value={features?.codigoContestador} />
            <FieldView label="Clave Contestador" value={features?.claveContestador} />
            <FieldView label="Encargado" value={features?.manager} />
            <FieldView label="Tel. Encargado" value={features?.managerPhone} />
            </div>
          </div>
          <div className="w-full">
            <Title text={"Info tecnica"} />
            <div className="grid grid-cols-3 text-sm gap-6 w-full text-center p-3 ">
            <FieldView label="Superficie m2" value={features?.technicalData?.area} />
            <FieldView label="Capacidad personas" value={features?.technicalData?.capacity} />
            <FieldView label="Ambientes" value={features?.technicalData?.environments} />
            <FieldView label="Habitaciones" value={features?.technicalData?.bedrooms} />
            <FieldView label="Camas" value={`${features?.technicalData?.beds}`} />
            </div>
          </div>

          <div className="w-full">
            <Title text={"Precios $"} />
            <div className="grid grid-cols-3 text-sm gap-6 w-full text-center p-3 ">
            <FieldView label="Estadia minima" value={`${features?.stayAndPrice?.minimumStay} dias`} />
            <FieldView label="Estadia maxima" value={`${features?.stayAndPrice?.maximumStay} dias`} />
            <FieldView label="Semana propietario" value={features?.stayAndPrice?.weekPriceProp} />
            <FieldView label="Semana Renta" value={features?.stayAndPrice?.weekPriceRent} />
            <FieldView label="Quincena propietario" value={features?.stayAndPrice?.halfMonthPriceProp} />
            <FieldView label="Quincena Renta" value={features?.stayAndPrice?.halfMonthPriceRent} />
            <FieldView label="Mes propietario" value={`${features?.stayAndPrice?.monthlyPriceProp}`} />
            <FieldView label="Mes Renta" value={`${features?.stayAndPrice?.monthlyPriceRent}`} />
            </div>
          </div>
          <div className="w-full">
            <Title text={"Comentarios"} />
            <div className="text-sm gap-6 w-full text-center py-3 px-10 ">
            <p className="w-full">"{features?.internalComments}"</p>
            
            </div>
          </div>
        </div>
        
        <GalleryComponent />
      </div>
    </ClickAwayListener>
  );
};

export default PreviewComponent;

const GalleryComponent = ({ images }) => {
  const Images = [
    { src: "banner.jpg" },
    { src: "banner.jpg" },
    { src: "banner.jpg" },
  ];
  return <Slider images={Images} />;
};

const Title = ({ text }) => {
  return (
    <h3 className="bg-gradient-to-l from-indigo-500 to-indigo-600 py-1 text-white w-full text-center border-b border-gray-200 ">
      {text}
    </h3>
  );
};

const FieldView = ({label, value}) => {
  return (
    <p className="flex flex-col text-sm">
      <strong className="text-xs">{label}:</strong>
      {value || "-"}
    </p>
  );
};
