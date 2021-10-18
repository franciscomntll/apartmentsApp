import Navigation from "../components/Navigation";

const DefaultLayout = ({ children }) => {
  return (
      <div className="min-h-screen">
      <Navigation />
      <main className="bg-gradient-to-t from-gray-100 to-white h-full">
      {children}

      </main>
      </div>
  );
};

export default DefaultLayout;
