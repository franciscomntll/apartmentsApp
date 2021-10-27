import { useEffect, useState } from "react";
import api from "../api";
import Hits from "../components/Hits";
import Pagination from "../components/Pagination";
import SearchComponent from "../components/SearchComponent";


const Home = () => {
  // Almacena array de departamentos
  const [data, setData] = useState([""])
  //Almacenar valor del buscador
  const [value, setValue] = useState("")


  useEffect(() => {
    // Peticion HTTP a api 
    api.fetchApartments(value)
    .then(res => setData(res))
    .catch(err => console.log(err))
    
  }, [value])
  return (
    <>
      <div className="max-w-screen-lg p-12 flex flex-col gap-3 w-full mx-auto inset-x-0">
        <h1 className="text-xl w-full text-center font-bold text-gray-900 ">Encuentra tu apartamento de ensueño...</h1>
        <SearchComponent onChange={(e) => setValue(e.target.value)} value={value} placeholder={"Buscar"} />
        <Hits data={data} />
        <Pagination />
      </div>
      </>
  );
};

export default Home;
