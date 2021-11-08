import Navigation from "../components/Navigation";
import { PopupContextProvider } from "../context/PopupContext";
import { ToastContextProvider } from "../context/ToastContext";
import ToastsComponent from '../components/ToastsComponent'

const DefaultLayout = ({ children }) => {
  return (
    <>
    <ToastContextProvider>
      <PopupContextProvider>
        <ToastsComponent />
        <div className="min-h-screen w-full relative">
          <Navigation />
          <main className="bg-gradient-to-t from-gray-200 to-gray-100 ">
            {children}
          </main>
        </div>
      </PopupContextProvider>
      </ToastContextProvider>
      <style jsx global>
        {`
          main {
            min-height: calc(100vh - 5rem);
            padding-bottom: 5rem;
          }

          ::-webkit-scrollbar {
            width: 8px;
            display: none;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1
            border-radius: 6px;
          }
          ::-webkit-scrollbar-thumb {
            background: pink;
            border-radius: 6px;
            height: 50%;
          }
        
        `}
      </style>
    </>
  );
};

export default DefaultLayout;
