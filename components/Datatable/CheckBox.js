import { forwardRef, useEffect, useRef } from "react";

export const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <label className="inline-flex items-center text-sm w-max h-max">
          <input
            className="text-blue-500 w-5 h-5 mr-2 focus:ring-blue-400 focus:ring-opacity-25 rounded-md border border-gray-400 transition "
            type="checkbox" ref={resolvedRef} {...rest}
          />
        </label>
      </>
    );
  }
);
