import { useEffect, useReducer, useRef, useState } from "react";
import { ArrowIcon } from "../icons";

const Slider = ({ images }) => {
  const [autoplay, setAutoplay] = useState(true);
  const [width, setWidth] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    items: images ?? [],
  });
  const ref = useRef();

  const handleResize = () => {
    setWidth(ref.current.getBoundingClientRect().width);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (autoplay && state.currentIndex + 1 < state.items.length) {
      setTimeout(() => {
        dispatch({ type: "NEXT" });
      }, 2000);
    }
  }, [state.currentIndex]);

  return (
    //  Slider Container
    <div ref={ref} className={`relative bg-white overflow-hidden w-full `}>
      <button
        className="bg-gray-200 bg-opacity-50 z-10 w-10 h-10 rounded-lg absolute bottom-5 left-5 grid place-items-center hover:bg-opacity-80 transition"
        onClick={() => {
          setAutoplay(false);
          if (state.currentIndex - 1 >= 0) {
            dispatch({ type: "PREV" });
          }
        }}
      >
        <ArrowIcon className="text-gray-500 w-6 h-6" />
      </button>
      <button
        className="bg-gray-200 bg-opacity-50 z-10 w-10 h-10 rounded-lg absolute bottom-5 right-5 grid place-items-center hover:bg-opacity-80 transition"
        onClick={() => {
          setAutoplay(false);
          if (state.currentIndex + 1 < state.items.length) {
            dispatch({ type: "NEXT" });
          }
        }}
      >
        <ArrowIcon className="text-gray-500 w-6 h-6 transform rotate-180" />
      </button>
      {/* Slider Wrapper */}
      <div className="slider-wrap absolute top-0 left-0 h-full flex items-center flex-wrap transition duration-300">
        {state.items.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            className="slider relative h-full flex items-center justify-center text-6xl object-cover object-center"
          />
        ))}
      </div>
      <style jsx>
        {`
          .slider {
            width: ${width}px;
          }
          .slider-wrap {
            transform: translateX(${-(state.currentIndex * width)}px);
            width: ${width * state.items.length + "px"};
          }
        `}
      </style>
    </div>
  );
};

export default Slider;

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + (1 % state.items.length),
      };
    case "PREV":
      return {
        ...state,
        currentIndex: state.currentIndex - (1 % state.items.length),
      };
    case "GOTO":
      return {
        ...state,
        currentIndex: action.index,
      };
    case "RESET":
      return { currentIndex: 0, currentPosition: 0 };

    default:
      return state;
  }
}
