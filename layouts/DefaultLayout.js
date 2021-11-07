import Navigation from "../components/Navigation";
import { PopupContextProvider } from "../context/PopupContext";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PopupContextProvider>
        <div className="min-h-screen w-full relative">
          <Navigation />
          <main className="bg-gradient-to-t from-gray-200 to-gray-100 ">
            {children}
          </main>
        </div>
      </PopupContextProvider>
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
