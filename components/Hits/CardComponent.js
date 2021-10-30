import { memo, useContext, useRef, useState } from "react";
import Link from 'next/link'
import Slider from "react-slick";
import { Button, ButtonIcon } from "../Inputs";
import {
  AmbientesIcon,
  BathroomIcon,
  CocheraIcon,
  DormitorioIcon,
  EditIcon,
  EyeIcon,
  HeartIcon,
  PetsIcon,
  ShareIcon,
  TotalIcon,
} from "../icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Estado, PopupContext } from "../../context/PopupContext";
import router from 'next/router'

const CardComponent = memo(({data}) => {
  const {isShow, setShow} = useContext(PopupContext)
  
  const refSlider = useRef();
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md bg-white flex flex-col gap-2 transform  transition duration-700  hover:opacity-95">
      <div className="w-full h-72 grid grid-cols-1 relative">
        <div
          onClick={() => refSlider.current.slickPrev()}
          className="hidden md:block w-1/2 h-full left-0 z-50 absolute transition bg-gradient-to-l from-transparent to-black opacity-20 cursor-pointer"
        />
        <div
          onClick={() => refSlider.current.slickNext()}
          className="hidden md:block w-1/2 h-full right-0 z-50 absolute transition bg-gradient-to-r from-transparent to-black opacity-20 cursor-pointer"
        />

        <Slider ref={refSlider}>
        {data?.images?.map((item,idx) => (
            <img
            key={idx}
            src={item?.url}
            alt={item?.altText}
            className="w-full h-72 object-cover object-center"
          />
          ))}
        </Slider>
        <div className="absolute top-4 right-4 text-white flex items-center gap-2 z-50">
          <ButtonIcon onClick={() => router.push("/panel?type=edit")}>
            <EditIcon className="w-4 h-4" />
          </ButtonIcon>
          <ButtonIcon onClick={() => setShow(new Estado(true, "view", data)) }>
            <EyeIcon className="w-4 h-4" />
          </ButtonIcon>
        </div>
      </div>
      <div className="flex flex-col p-3  ">
        <p className="text-sm font-bold">{data?.propietario}</p>
        <p className="text-xs ">{data?.calle}, {data?.numero}, {data?.ciudad}</p>
        <Features {...data} />
      </div>
      {/* <FooterCard {...data} /> */}
    </div>
  );
});

export default CardComponent;

const FooterCard = (props) => {
  console.log(props)
  const [isFav, setFav] = useState(false);
  return (
    <div className="flex items-center justify-center p-3 border-t border-gray-300">
        <ButtonIcon onClick={() => setFav(!isFav)}>
          <EyeIcon className="w-6 h-6 text-gray-500" />
        </ButtonIcon>
      <Link href={`/panel?type=edit&id=${props?.id}`}>
        <ButtonIcon>
          <EditIcon className="w-6 h-6 text-gray-500"/>
        </ButtonIcon>
      </Link>
    </div>
  );
};

const Features = ({superficie, capacidad, ambientes, camas, mascotas}) => {
  const Feature = ({ type, title, value }) => {
    const size = "w-4 h-4";
    const featureIcons = {
      rooms: <AmbientesIcon className={size} />,
      measures: <TotalIcon className={size} />,
      bedrooms: <DormitorioIcon className={size} />,
      bathrooms: <BathroomIcon className={size} />,
      garage: <CocheraIcon className={size} />,
      mascotas: <PetsIcon className={size} />,
    };
    return (
      <div className="flex items-center gap-1 text-xs">
        {featureIcons[type.toLowerCase()]} {value} {type === "mascotas" ? value ? "Acepta" : "No" : ""}
        <p className="capitalize">{title}</p>
      </div>
    );
  };
  return (
    <div className="w-full grid grid-cols-2 pt-4 pb-2 gap-3">
      <Feature title={"m²"} value={superficie} type={"measures"} />
      <Feature title={"Ambientes"} value={ambientes} type={"rooms"} />
      <Feature title={"Dormitorios"} value={camas} type={"bedrooms"} />
      <Feature title={"Mascotas"} value={mascotas} type={"mascotas"} />
    </div>
  );
};

