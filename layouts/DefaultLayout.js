import Navigation from "../components/Navigation";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen w-full">
      <Navigation />
      <main className="bg-gradient-to-t from-gray-100 to-white ">
      {children}
      </main>
      </div>
      <style jsx>
        {`
        main {
          min-height: calc(100vh - 5rem)
        }
        `}
      </style>
      </>
  );
};

export default DefaultLayout;
