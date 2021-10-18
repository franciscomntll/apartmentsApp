import Hits from "../components/Hits";
import Pagination from "../components/Pagination";
import SearchComponent from "../components/SearchComponent";


const Home = () => {
  
  return (
    <>
      <div className="w-full h-96 bg-gray-900 overflow-hidden">
        <img  src={"/banner.jpg"} className="object-cover object-center"/>
      </div>
      <div className="max-w-screen-lg p-12 w-full mx-auto inset-x-0">
        <h1 className="text-xl w-full text-center font-bold text-gray-900">Encuentra tu apartamento de ensueño...</h1>
        <SearchComponent placeholder={"Buscar"} />
        <Hits />
        <Pagination />
      </div>
      </>
  );
};

export default Home;
