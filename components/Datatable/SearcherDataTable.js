import 'regenerator-runtime/runtime';
import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { SearchIcon } from '../icons';

const SearcherDataTable = ({ globalFilter, setGlobalFilter }) => {
    const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)
  return (
    <span className="w-full relative col-span-3">
      <input
      className="border-gray-300 border w-full py-2 pl-4 rounded-xl focus:outline-none "
      value={value || ""}
      autoFocus
      onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={"Buscar"}
      
    />
    <SearchIcon className="w-4 h-4 text-gray-400 absolute top-0 my-auto inset-y-0 right-4" />
    </span>

  )
};

export default SearcherDataTable;
