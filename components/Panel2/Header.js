import Button from "../Button";
import SearchComponent from "../SearchComponent";
import { CrossIcon } from "../icons";
import SearcherDataTable from "../Datatable/SearcherDataTable";

const Header = ({ type, handleClick }) => {
  return (
    <div className="w-full bg-gray-900 py-10 pb-40 ">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto inset-x-0 px-5 md:px-0">
        <div className="flex md:flex-row flex-col items-center gap-4">
          <h1 className="text-white font-semibold text-2xl">{`${
            type ? type + "s" : ""
          }`}</h1>
          <Button variant={"primary"} onClick={handleClick} >
            <CrossIcon className="w-4 h-4" /> Nuevo
          </Button>
        </div>
        <span className="w-1/2">
          
        </span>
      </div>
    </div>
  );
};

export default Header;
