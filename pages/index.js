import { useContext, useEffect, useState } from "react";
import api from "../api";
import Popup from "../components/Forms/Popup";
import Hits from "../components/Hits";
import Pagination from "../components/Pagination";
import PreviewComponent from "../components/PreviewComponent";
import SearchComponent from "../components/SearchComponent";
import { PopupContext } from "../context/PopupContext";

const fakeData = [
  {agencia: 'HolaAgency',
  propietario: "Agustina Petrocelli",
  categoria: 'Categoria1',
  fechaIncorporacion: 1635538504,
  calle: "Simon Bolivar",
  numero: "14",
  piso: "20",
  apartamento: "18",
  torre: "Insignia",
  entreCalle1: "49",
  entreCalle2: "50",
  ciudad: "Maracaibo",
  codigoPostal: "4004",
  telefono: "+584121085574",
  codigoContestador: "23",
  claveContestador: "50",
  encargado: "Jose Gonzalez",
  telefonoEncargado: "+458579985685",
  superficie: "128",
  capacidad: "15",
  ambientes: "3",
  camas: "3",
  mascotas: true,
  comentarios: "Lorem ipsum",
  images : [
    {url: '/banner.jpg'},
    {url: '/banner.jpg'},
  ]
},
{agencia: 'HolaAgency',
  propietario: "Agustina Petrocelli",
  categoria: 'Categoria1',
  fechaIncorporacion: 1635538504,
  calle: "Simon Bolivar",
  numero: "14",
  piso: "20",
  apartamento: "18",
  torre: "Insignia",
  entreCalle1: "49",
  entreCalle2: "50",
  ciudad: "Maracaibo",
  codigoPostal: "4004",
  telefono: "+584121085574",
  codigoContestador: "23",
  claveContestador: "50",
  encargado: "Jose Gonzalez",
  telefonoEncargado: "+458579985685",
  superficie: "128",
  capacidad: "15",
  ambientes: "3",
  camas: "3",
  mascotas: true,
  comentarios: "Lorem ipsum",
  images : [
    {url: '/banner.jpg'},
    {url: '/banner.jpg'},
  ]
},
{agencia: 'HolaAgency',
  propietario: "Agustina Petrocelli",
  categoria: 'Categoria1',
  fechaIncorporacion: 1635538504,
  calle: "Simon Bolivar",
  numero: "14",
  piso: "20",
  apartamento: "18",
  torre: "Insignia",
  entreCalle1: "49",
  entreCalle2: "50",
  ciudad: "Maracaibo",
  codigoPostal: "4004",
  telefono: "+584121085574",
  codigoContestador: "23",
  claveContestador: "50",
  encargado: "Jose Gonzalez",
  telefonoEncargado: "+458579985685",
  superficie: "128",
  capacidad: "15",
  ambientes: "3",
  camas: "3",
  mascotas: true,
  comentarios: "Lorem ipsum",
  images : [
    {url: '/banner.jpg'},
    {url: '/banner.jpg'},
  ]
},
{agencia: 'HolaAgency',
  propietario: "Agustina Petrocelli",
  categoria: 'Categoria1',
  fechaIncorporacion: 1635538504,
  calle: "Simon Bolivar",
  numero: "14",
  piso: "20",
  apartamento: "18",
  torre: "Insignia",
  entreCalle1: "49",
  entreCalle2: "50",
  ciudad: "Maracaibo",
  codigoPostal: "4004",
  telefono: "+584121085574",
  codigoContestador: "23",
  claveContestador: "50",
  encargado: "Jose Gonzalez",
  telefonoEncargado: "+458579985685",
  superficie: "128",
  capacidad: "15",
  ambientes: "3",
  camas: "3",
  mascotas: true,
  comentarios: "Lorem ipsum",
  images : [
    {url: '/banner.jpg'},
    {url: '/banner.jpg'},
  ]
},
{agencia: 'HolaAgency',
  propietario: "Agustina Petrocelli",
  categoria: 'Categoria1',
  fechaIncorporacion: 1635538504,
  calle: "Simon Bolivar",
  numero: "14",
  piso: "20",
  apartamento: "18",
  torre: "Insignia",
  entreCalle1: "49",
  entreCalle2: "50",
  ciudad: "Maracaibo",
  codigoPostal: "4004",
  telefono: "+584121085574",
  codigoContestador: "23",
  claveContestador: "50",
  encargado: "Jose Gonzalez",
  telefonoEncargado: "+458579985685",
  superficie: "128",
  capacidad: "15",
  ambientes: "3",
  camas: "3",
  mascotas: true,
  comentarios: "Lorem ipsum",
  images : [
    {url: '/banner.jpg'},
    {url: '/banner.jpg'},
  ]
},
]

const Home = () => {

  const { isShow } = useContext(PopupContext);
  // Almacena array de departamentos
  const [data, setData] = useState(fakeData);
  //Almacenar valor del buscador
  const [value, setValue] = useState("");
  //Almacenar pagina actual
  const [pageIndex, setPageIndex] = useState(1);
  //Almacenar numero total de paginas
  const [TotalPages, setTotalPages] = useState(4);

  useEffect(() => {
    // Peticion HTTP a api
    api
      .fetchApartments(value)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [value]);

  const handleChangePage = (toPage) => {
    setPageIndex(toPage);
    //Llamar a la api para traer nueva data y luego setear al estado [data]
    // api.fetchApartments()
  };

  return (
    <>
      <Popup state={isShow}>
        <PreviewComponent data={data} />
      </Popup>
      <div className="max-w-screen-lg p-12 flex flex-col gap-3 w-full mx-auto inset-x-0">
        <h1 className="text-xl w-full text-center font-bold text-gray-900 ">
          Encuentra tu apartamento de ensueño...
        </h1>
        <SearchComponent
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder={"Buscar"}
        />
        <Hits data={data} />

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
    </>
  );
};

export default Home;
