import { useContext, useEffect, useState } from "react";
import api from "../api";
import Popup from "../components/Forms/Popup";
import Hits from "../components/Hits";
import Pagination from "../components/Pagination";
import PreviewComponent from "../components/PreviewComponent";
import SearchComponent from "../components/SearchComponent";
import { PopupContext } from "../context/PopupContext";

const Home = () => {
  const { isShow } = useContext(PopupContext);
  // Almacena array de departamentos
  const [data, setData] = useState([]);
  //Almacenar valor del buscador
  const [value, setValue] = useState("");
  //Almacenar pagina actual
  const [pageIndex, setPageIndex] = useState(1);
  //Almacenar numero total de paginas
  const [TotalPages, setTotalPages] = useState();
  //Almacenar numero total de paginas
  const [loading, setLoading] = useState(true);

  // Peticion HTTP a api
  const fetchData = async () => {
    setLoading(true)
    const { data } = await api.fetchApartments({
      currentPage: pageIndex,
      pageSize: 12,
      sortColumn: "id",
      ascend: true,
    });
    setData(data.data);
    setTotalPages(Math.round(data.total / 12));
    setLoading(false)
    
  };
  useEffect(() => {
    fetchData();
  }, [pageIndex]);

  const handleChangePage = async (toPage) => {
    setPageIndex(toPage);
  };

  return (
    <>
      <Popup state={isShow}>
        <PreviewComponent data={data} />
      </Popup>
      <div className="flex flex-col gap-3 w-full">
        <div className="bg-indigo-600">
          <div className="xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto inset-x-0 w-full py-12 grid grid-cols-2 place-items-center">
            <h1 className="text-2xl w-full text-center font-semibold text-white ">
              Busca un apartamento
            </h1>
            <SearchComponent
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder={"Buscar"}
            />
          </div>
        </div>
        <div className="xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto inset-x-0 w-full">
          <Hits data={data} loading={loading} />

          <Pagination
            pageIndex={pageIndex}
            to={TotalPages}
            gotoPage={(page) => handleChangePage(page)}
            canPreviousPage={pageIndex > 1}
            canNextPage={pageIndex < TotalPages}
            previousPage={() => handleChangePage(pageIndex - 1)}
            nextPage={() => handleChangePage(pageIndex + 1)}
            selectShow={false}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
