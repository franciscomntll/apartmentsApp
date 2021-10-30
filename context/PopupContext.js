import { createContext, useState } from "react";

export class Estado {
    constructor(isVisible, type, data) {
      (this.isVisible = isVisible || false),
        (this.type = type || ""),
        (this.data = data || {});
    }
  }

const initialContext = {
    isShow: new Estado(),
    setShow: () => null,
}

const PopupContext = createContext(initialContext);

const PopupContextProvider = ({ children }) => {
    const [isShow, setShow] = useState(new Estado);
  
    return (
      <PopupContext.Provider value={{ isShow, setShow }}>
        {children}
      </PopupContext.Provider>
    );
  };

  export { PopupContext, PopupContextProvider };