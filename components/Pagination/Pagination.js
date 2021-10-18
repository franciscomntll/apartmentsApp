import { useState } from "react";
import { ArrowIcon } from "../icons";

const PaginationDesktop = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const [isActive, setActive] = useState(1)
  const noActive = "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
  const Active = "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"

  return (
    <div className="hidden lg:flex w-full items-center justify-between py-4 border-t border-gray-300">
      <p className="text-sm">Mostrando 1 to 10 of 97 results</p>
      <div className="border-gray-300 rounded-lg">
        {arr.map((item, idx) => (
          <a onClick={() => setActive(item)} key={idx} className={`${item === isActive ? Active : noActive} cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PaginationDesktop;
