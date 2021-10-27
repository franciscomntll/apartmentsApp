import { useRef, useState } from "react";
import Slider from "react-slick";
import { Button, ButtonIcon } from "../Inputs";
import {
  AmbientesIcon,
  BathroomIcon,
  CocheraIcon,
  DormitorioIcon,
  HeartIcon,
  ShareIcon,
  TotalIcon,
} from "../icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardComponent = ({data}) => {
  const refSlider = useRef();
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md bg-white flex flex-col gap-2 transform hover:scale-105 transition duration-700 cursor-pointer hover:opacity-95">
      <div className="w-full h-72 grid grid-cols-1 relative">
        <div
          onClick={() => refSlider.current.slickPrev()}
          className="w-1/2 h-full left-0 z-50 absolute transition bg-gradient-to-l from-transparent to-black opacity-20 "
        />
        <div
          onClick={() => refSlider.current.slickNext()}
          className="w-1/2 h-full right-0 z-50 absolute transition bg-gradient-to-r from-transparent to-black opacity-20 "
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
      </div>
      <div className="flex flex-col p-3 ">
        <p className="text-sm font-bold">Republica de la India</p>
        <p className="text-xs ">Palermo Chico, Palermo</p>
        <Features />
      </div>
      <FooterCard />
    </div>
  );
};

export default CardComponent;

const FooterCard = () => {
  const [isFav, setFav] = useState(false);
  return (
    <div className="flex items-center justify-between text-gray-600 p-3 border-t border-gray-300">
      <span className="flex items-center gap-2">
        <ButtonIcon onClick={() => setFav(!isFav)}>
          <HeartIcon fill={isFav ? "currentColor" : "none"} />
        </ButtonIcon>
        <ButtonIcon>
          <ShareIcon fill={"currentColor"} />
        </ButtonIcon>
      </span>
      <Button variant={"primary"}>Editar</Button>
    </div>
  );
};

const Features = () => {
  const Feature = ({ type, title, value }) => {
    const size = "w-4 h-4";
    const featureIcons = {
      rooms: <AmbientesIcon className={size} />,
      measures: <TotalIcon className={size} />,
      bedrooms: <DormitorioIcon className={size} />,
      bathrooms: <BathroomIcon className={size} />,
      garage: <CocheraIcon className={size} />,
    };
    return (
      <div className="flex items-center gap-1 text-xs">
        {featureIcons[type.toLowerCase()]} {value}
        <p className="capitalize">{title}</p>
      </div>
    );
  };
  return (
    <div className="w-full grid grid-cols-2 pt-4 pb-2 gap-3">
      <Feature title={"m²"} value={128} type={"measures"} />
      <Feature title={"Ambientes"} value={5} type={"rooms"} />
      <Feature title={"Dormitorios"} value={4} type={"bedrooms"} />
      <Feature title={"Baños"} value={2} type={"bathrooms"} />
      <Feature title={"Cochera"} value={2} type={"garage"} />
    </div>
  );
};
