import ClickAwayListener from "react-click-away-listener";
import { MenuIcon } from "../icons";
import { ButtonIcon } from "../Inputs";

const Sidebar = ({ set, state }) => {
    const ListMenu = [
        {title: "Clientes", route: "/", icon: ""},
        {title: "Clientes", route: "/", icon: ""},
        {title: "Clientes", route: "/", icon: ""},
        {title: "Clientes", route: "/", icon: ""},
    ]
  return (
      <ClickAwayListener onClickAway={() => state && set(false)}>
    <div
      className={`w-72 p-6 bg-gradient-to-b from-gray-900  to-blue-900 h-screen fixed top-0 left-0 z-50 transition-all transform ${
        state ? "" : "-translate-x-full"
      } flex items-center py-10 flex-col gap-4 shadow-xl ring`}
    >
        <div className="flex w-full block cursor-pointer hover:bg-gray-900 bg-opacity-20 rounded-full p-2 w-max right-0 mr-auto" onClick={() => set(!state)}>
        <MenuIcon className="text-white w-6 h-6" />
        </div>
      <img
        className="h-24 w-24 rounded-full bg-white border-4 border-indigo-200 object-cover object-center"
        src={"/profile.jpg"}
      />
      <span className="flex flex-col items-center ">
        <h2 className="text-white text-bold text-md">Santiago Garcia Saiz</h2>
        <h3 className="text-gray-400 text-bold text-xs">
          santiago.garcia.saiz@gmail.com
        </h3>
      </span>

      <ul className="w-full flex flex-col text-white text-sm pt-10">
      {ListMenu.map((item,idx) => (
          <li className="p-2">{item.title}</li>
      ))}
      </ul>
    </div>
    </ClickAwayListener>
  );
};

export default Sidebar;
