import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import DataTable from "../components/Datatable";
import FormCliente from "../components/Forms/FormCliente";
import Popup from "../components/Forms/Popup";
import Header from "../components/Panel2/Header";

export class Estado {
  constructor(isVisible, type, data) {
    (this.isVisible = isVisible || false),
      (this.type = type || ""),
      (this.data = data || {});
  }
}

const panel2 = () => {
  const [isShow, setShow] = useState(new Estado());

  return (
    <>
      <Popup state={isShow}>
          <div className="relative bg-white p-6 shadow-md rounded-2xl md:w-1/2 h-max mx-5 md:mx-0 ">
            <FormCliente
              data={isShow}
              onCancel={() => setShow(new Estado())}
              title={"Crear cliente"}
            />
          </div>
      </Popup>
      <div className="w-full ">
        <Header
          handleClick={() => setShow(new Estado(true, "create"))}
          type={"Cliente"}
        />
        <div className="table-wrapper h-full -mt-10 mx-3 rounded-xl">
        <div className="data-table bg-white  w-full mx-auto inset-x-0 max-w-screen-lg rounded-2xl p-4 shadow-md">
          <DataTable setShowForm={(act) => setShow(act)} />
        </div>
        </div>
      </div>
      
      <style jsx>
          {`
          @media (max-width: 600px) {
              .table-wrapper {
                 overflow-x : scroll;
              }
              .data-table {
                  min-width: 800px;
                  
              }
          }
          `}
      </style>
    </>
  );
};

export default panel2;
