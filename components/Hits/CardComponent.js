import { memo, useContext, useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { Button, ButtonIcon } from "../Inputs";
import {
  AmbientesIcon,
  BathroomIcon,
  CocheraIcon,
  DormitorioIcon,
  EditIcon,
  EyeIcon,
  PeopleIcon,
  PhoneIcon,
  TotalIcon,
} from "../icons";
import { useHover } from "../../utils/useHover";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Estado, PopupContext } from "../../context/PopupContext";
import router from "next/router";

const CardComponent = memo(({ data }) => {
  const { address, category, phonenumber, owner, stayAndPrice } = data;
  const { isShow, setShow } = useContext(PopupContext);
  const [hoverRef, isHovered] = useHover();
  const refSlider = useRef();

  return (
    <div
      ref={hoverRef}
      className="w-full rounded-2xl overflow-hidden shadow-md bg-white flex flex-col  transform  transition duration-700  hover:opacity-95"
    >
      <div className="flex items-center justify-center gap-2 py-2 px-4">
        <img
          className="rounded-full w-8 h-8 abso bg-gray-200 object-cover objec-center"
          src={"profileDefault.png"}
        />
        <p className="text-xs text-g col-span-5 my-auto inset-y-0 ">
          Propietario:{" "}
          <strong className="">
            {owner.name} {owner.lastname}
          </strong>
        </p>
      </div>
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
          <img
            src={"banner.jpg"}
            className="w-full h-72 object-cover object-center"
          />
          <img
            src={"banner.jpg"}
            className="w-full h-72 object-cover object-center"
          />
        </Slider>
        <div
          className={`absolute top-4 right-4 text-white flex items-center gap-2 z-50 transition ${
            isHovered ? "opacity-1000" : "opacity-0"
          }`}
        >
          <ButtonIcon onClick={() => router.push(`/panel?type=edit&id=${data.id}`)}>
            <EditIcon className="w-4 h-4" />
          </ButtonIcon>
          <ButtonIcon onClick={() => setShow(new Estado(true, "view", data))}>
            <EyeIcon className="w-4 h-4" />
          </ButtonIcon>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col px-5 pt-5">
          <p className=" font-bold w-full">{category.name}</p>
          <p className="text-xs  w-full truncate">
            {address.street}
            {address.city && `, ${address.city}`}
          </p>
          <Features {...data} />
        </div>
        <div className="bg-indigo-600 w-full justify-center flex items-center gap-6 px-5 py-3 h-auto text-white">
          <p className="text-sm font-bold text-white flex items-center gap-1 ">
            <PhoneIcon className="w-5 h-5" />{" "}
            {phonenumber ? phonenumber : "No definido"}
          </p>
          |
          <p className="text-white flex items-center gap-1">
            <strong>{stayAndPrice.monthlyPriceRent}</strong>{" "}
            <small>$/mes</small>
          </p>
        </div>
      </div>
    </div>
  );
});

export default CardComponent;


const Features = (data) => {
  const { technicalData } = data;

  const Feature = ({ type, title, value }) => {
    const size = "w-5 h-5";
    const featureIcons = {
      rooms: <AmbientesIcon className={size} />,
      measures: <TotalIcon className={size} />,
      bedrooms: <DormitorioIcon className={size} />,
      bathrooms: <BathroomIcon className={size} />,
      garage: <CocheraIcon className={size} />,
      mascotas: <PeopleIcon className={size} />,
    };
    return (
      <div className="flex items-center gap-1 text-xs">
        {featureIcons[type.toLowerCase()]} {value}
        <p className="capitalize">{title}</p>
      </div>
    );
  };
  return (
    <div className="w-full grid grid-cols-2 pt-4 pb-4 gap-3 w-full">
      <Feature
        title={"Ambientes"}
        value={technicalData.environments}
        type={"rooms"}
      />
      <Feature title={"m²"} value={technicalData.area} type={"measures"} />
      <Feature
        title={"Dormitorios"}
        value={technicalData.bedrooms}
        type={"bedrooms"}
      />
      <Feature
        title={"personas"}
        value={technicalData.capacity}
        type={"mascotas"}
      />
    </div>
  );
};

