import { createContext, useState } from "react";

const generateID = (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

export class Toast {
  id = generateID(5)
  message;
  type;
  constructor(type, message) {
    this.type = type;
    this.message = message;
  }
  
}

const initialContext = {
  toasts: [],
  setToast: () => null,
};

const ToastContext = createContext(initialContext);

const ToastContextProvider = ({ children }) => {
  const [toasts, setToast] = useState([]);

  const addToast = (toast) => {
    setToast(old => [...old, toast])
  }
  const removeToast = (id) => {
        setToast(old => old.filter(item => id !== item.id))
  }
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastContextProvider };
