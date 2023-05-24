import "./App.css";
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav"
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favoritos/Favorites";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate} from "react-router-dom"
import axios from "axios"
const URL_BASE = 'http://localhost:3001/rickandmorty/character/'

//const KEY = '7232b1acf849.9fe3a698a40396b2a72b'


function App () {
  const [characters, setCharacters ] = useState([]);
  const navigate = useNavigate()
  const location = useLocation();
  const loginlocation = location.pathname !== '/';
  const [access, setAccess] = useState(false)

      ///sin tri catch
//   const login = (userData) => {
//     const { email, password } = userData;
//     const URL = 'http://localhost:3001/rickandmorty/login/';
//     axios(`${URL}?email=${email}&password=${password}`)
//     .then(({ data }) => {  //desestructura la respuesta por eso ese data
//        const { access } = data;
//        setAccess(access);
//        access && navigate('/home');
//     });
//  }
const login = async (userData) => {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';

  try {
    const response = await axios(`${URL}?email=${email}&password=${password}`);
    const { access } = response.data;
    setAccess(access);
    access && navigate('/home');
  } catch (error) {
    console.error(error);
  }
};


    useEffect(() => {
      !access && navigate('/');
    }, [access]);

    const onSearch = async (id) => {
      try {
        const response = await fetch(`${URL_BASE}${id}`);
        const data = await response.json();

        if (data.name) {
          // Comprobar si el personaje ya existe en el estado/ para evitar repetirlo
          if (!characters.find((char) => char.id === data.id)) {
            setCharacters([...characters, data])
          } else {
            alert('El personaje ya ha sido agregado');
          }
        } else {
          alert('No hay personajes con ese ID');
        }
      } catch (error) {
        console.error(error);
        alert('Ha ocurrido un error al buscar el personaje');
      }
    };
    

  const onClose = (id) => { //elimina el personaje
    setCharacters(
      characters.filter((char) => char.id !== id));
    //devuelve un array nuevo como estado, sin el personaje que borramos
      //el id identifica, filtramos el array y busca un personaje con id distinto del que quiero borrar, si el id es distinto pasa el filtro.
      //ONCLOSE, cuando hacemos click en la card con id 1, se ejecuta la funcion y todo lo que NO sea id 1, pasa el filtro, de esta forma elimina la card 1.
      // esto modifica el estado, pasa el nuevo array, esto modifica las prop de cards, al modificarse la props, se modifica el mapeo, y esto saca la card
    }

  
  return (
    <div className='App' style={{ padding: '20px' }}>
      <div>
         {loginlocation && <Nav onSearch={onSearch} />}
        <Routes>
          <Route  path='/' element={<Form login={login} />} />
          <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail />}/>
          <Route path='/favorites' element={<Favorites characters={characters} />}/>
        </Routes>
      </div>  
    </div>
  )
}

export default App
