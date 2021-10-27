import { useContext } from "react";
import { Estado, PopupContext } from "../../context/PopupContext";
import {Button} from "../Inputs";

export const FormDelete = ({data, answer}) => {
    const {setShow} = useContext(PopupContext)
  return (
    <>
      <div className="w-full py-6 flex justify-center items-center flex-col">
        <h2 className="text-lg font-bold w-full text-center pb-4 h-12">
          ¿Quieres borrarlo?
        </h2>
        <div className="w-full gap-6 flex items-center justify-center">
          <Button variant="warning">Confirmar borrado</Button>
          <Button variant="secondary" onClick={() => setShow(new Estado(false, "delete"))} >Cancelar</Button>
        </div>
      </div>
    </>
  );
};

