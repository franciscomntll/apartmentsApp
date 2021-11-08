import { remove } from "dom-helpers";
import { useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ToastContext } from "../../context/ToastContext";
import { ExitIcon } from "../icons";

export const ToastComponent = ({ message, type, id }) => {
  const [visible, setVisible] = useState(false);
  const { toasts, dispatch } = useContext(ToastContext);

  useEffect(() => {
    setVisible(!visible);
    setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        removeToast(id);
      }, 1000);
    }, 8000);
  }, []);

  const handleRemove = () => {
    setVisible(false);
    setTimeout(() => {
      removeToast(id);
    }, 2000);
  };
  const types = {
    error: {
      color: "bg-red-500",
    },
    success: {
      color: "bg-green-600",
    },
    warning: {
      color: "bg-yellow-300",
    },
  };
  return (
    <>
      <div
        className={`p-3 notification w-80 max-h-16 flex items-center justify-center rounded-md relative shadow-lg transition duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        } ${types[type].color}`}
      >
        <button className="absolute top-2 left-2 " onClick={handleRemove}>
          <ExitIcon className="text-white w-4 h-4" />
        </button>
        <p className="text-white font-light">{message}</p>
      </div>
      <style jsx>
        {`
          .notification::bef {
            
          }
        `}
      </style>
    </>
  );
};
