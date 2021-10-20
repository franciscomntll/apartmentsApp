import Button from "../Button";
import SearchComponent from "../SearchComponent";
import { CrossIcon } from "../icons";

const Header = ({ type }) => {
  return (
    <div className="w-full bg-gray-900 py-10 pb-20">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto inset-x-0">
        <div className="flex items-center gap-4">
          <h1 className="text-white font-semibold text-2xl">{`${
            type ? type + "s" : ""
          }`}</h1>
          <Button variant={"primary"}>
            {" "}
            <CrossIcon className="w-4 h-4" /> Nuevo
          </Button>
        </div>
        <span className="w-1/2">
          <SearchComponent placeholder={"Buscar"} />
        </span>
      </div>
    </div>
  );
};

export default Header;
