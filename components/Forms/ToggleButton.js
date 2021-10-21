import { useField } from "formik";

const ToggleButton = ({label, ...props}) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="flex items-center justify-start w-full ">
      <label for="toggleB" className="flex items-center cursor-pointer text-sm">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            value={field.value}
            onChange={() => helpers.setValue(!field.value)}
            {...field} {...props}
          />
          <div className={`block ${field.value ? "bg-green-400" : "bg-red-400"} w-12 h-7 rounded-full`}/>
          <div className={`dot absolute left-1 top-1 bg-white w-5 h-5  rounded-full transition transform ${field.value ? " translate-x-full" : ""}`}/>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{label}</div>
      </label>
    </div>
  );
};

export default ToggleButton;
