import { useField } from "formik";
import { memo, useEffect, useMemo, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

export const SelectField = ({ label, options, loading, ...props }) => {
  const [field, meta, {setValue}] = useField(props);
  const [state, setState] = useState(false);

  const handleClick = (act) => {
    setValue(act);
    setState(false);
  };
  
  return (
    <>
      <div className="relative w-full">
        <div
          className="w-full border-2 py-2 pl-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-700 text-sm transition-colors h-10 rounded-md cursor-pointer"
          onClick={() => setState(!state)}
        >
          {field?.value && (
            <p className="text-sm text-gray-900">{field?.value?.title}</p>
          )}

          <input
            id={field.name}
            className="peer hidden"
            placeholder="john@doe.com"
            {...field}
            {...props}
          />
          <p
            htmlFor={field.name}
            className={`absolute left-2 -top-2 text-gray-400 text-xs transition-all px-1 bg-white cursor-pointer
              peer-placeholder-shown:top-1/4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400  peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-xs  peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 `}
          >
            {label}
          </p>
        </div>
        {state && (
          <Dropdown
            set={(act) => handleClick(act)}
            options={options}
            state={state}
            setState={(act) => setState(act)}
            loading={loading}
          />
        )}
        {meta.touched && meta.error?.title ? (
          <div className="error text-red-500 text-xs absolute pl-1 pt-0.5 bottom-0 left-0 transform translate-y-full">
            {meta.error?.title}
          </div>
        ) : null}
      </div>
    </>
  );
};

const Dropdown = memo(({ options = [], set, state, setState, loading }) => {
  const datos = useMemo(() => options, [options]);
  const [data, setData] = useState(options);
  const [Loading, setLoading] = useState(loading);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setLoading(true);
    const filter = datos.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filter);
    setValue(e.target.value);
    setLoading(false);
  };

  useEffect(() => {
    setData(options);
  }, [options]);

  return (
    <ClickAwayListener onClickAway={() => state && setState(false)}>
      <div className="w-full absolute bottom-0 translate-y-full transform left-0 grid bg-white rounded-md z-30 shadow border text-sm  ">
        <input
        autoFocus
          className="h-8 bg-gray-200 focus:outline-none pl-2 border-b-2 border-gray-300"
          placeholder={"Buscador"}
          value={value}
          onChange={handleChange}
        />
        <ul className="h-auto max-h-28 overflow-auto">
          {(() => {
            if (!loading) {
              if (data.length > 0) {
                return data?.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => set(item)}
                    className="py-1 px-2 hover:bg-gray-200 transition cursor-pointer"
                  >
                    {item.title}
                  </li>
                ));
              } else {
                return <p className="text-sm text-gray-700 w-full text-center py-2">No hay resultados</p>
              }
            } else {
              return (
                <li className=" hover:bg-gray-200 transition cursor-pointer text-gray-500 text-center w-full py-4 flex items-center gap-2 justify-center">
                  <div className="animate-spin h-5 w-5 border-b-4 border-indigo-400 rounded-full ..." />{" "}
                  Cargando
                </li>
              );
            }
          })()}
        </ul>
      </div>
    </ClickAwayListener>
  );
});
