import Navigation from "../components/Navigation";
import { PopupContextProvider } from "../context/PopupContext";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PopupContextProvider>
        <div className="min-h-screen w-full relative">
          <Navigation />
          <main className="bg-gradient-to-t from-gray-100 to-white ">
            {children}
          </main>
        </div>
      </PopupContextProvider>
      <style jsx>
        {`
          main {
            min-height: calc(100vh - 5rem);
            padding-bottom: 5rem;
          }
        `}
      </style>
    </>
  );
};

export default DefaultLayout;
