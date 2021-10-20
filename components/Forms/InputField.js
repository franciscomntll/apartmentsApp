import { useField } from "formik";

const InputField = ({label,...props}) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
        <div className="relative ">
           <input id={field.name} className="peer w-full border-2 py-2 pl-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-700 text-sm transition-colors rounded-md h-10 focus:ring-none appearance-none	hover:appearance-nonefocus:appearance-none" placeholder="⠀" {...field} {...props}   />
              <label for={field.name} className={`absolute left-2 -top-2 text-gray-400 text-xs transition-all  px-1 bg-white
              
              peer-placeholder-shown:top-1/4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400  peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-xs  peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 `}>{label}</label>
        </div>
        <style jsx>
            {`
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type=number] {
                -moz-appearance: textfield;
              }
            `}
        </style>
        </>
        
    )
}

export default InputField
