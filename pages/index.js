import { useEffect, useState } from "react";
import api from "../api";
import Hits from "../components/Hits";
import Pagination from "../components/Pagination";
import SearchComponent from "../components/SearchComponent";
import { fakeData } from "../fakeData";


const Home = () => {
  // Almacena array de departamentos
  const [data, setData] = useState(fakeData)
  //Almacenar valor del buscador
  const [value, setValue] = useState("")
  //Almacenar pagina actual
  const [pageIndex, setPageIndex] = useState(1)
  //Almacenar numero total de paginas
  const [TotalPages, setTotalPages] = useState(4)

  useEffect(() => {
    // Peticion HTTP a api 
    api.fetchApartments(value)
    .then(res => setData(res))
    .catch(err => console.log(err))
    
  }, [value])

  const handleChangePage = (toPage) => {
    setPageIndex(toPage)
    //Llamar a la api para traer nueva data y luego setear al estado [data]
    // api.fetchApartments()
  }
  return (
    <>
      <div className="max-w-screen-lg p-12 flex flex-col gap-3 w-full mx-auto inset-x-0">
        <h1 className="text-xl w-full text-center font-bold text-gray-900 ">Encuentra tu apartamento de ensueño...</h1>
        <SearchComponent onChange={(e) => setValue(e.target.value)} value={value} placeholder={"Buscar"} />
        <Hits data={data} />
        
        <Pagination 
          pageIndex={pageIndex} 
          to={TotalPages} 
          gotoPage={page => handleChangePage(page)} 
          canPreviousPage={pageIndex > 1}
          canNextPage={pageIndex < TotalPages}
          previousPage={() => handleChangePage(pageIndex - 1)}
          nextPage={() => handleChangePage(pageIndex + 1)}  
          selectShow={false}
          />
      </div>
      </>
  );
};

export default Home;
