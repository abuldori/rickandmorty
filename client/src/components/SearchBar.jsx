import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import { useState } from "react";


const SearchBar = ({onSearch}) => {
   
   const [id, setId] = useState("");

   const handlerChange = (e) => {
      setId(e.target.value);
   }

   const randomNumber = Math.floor(Math.random() * 826) + 1;

   return (
      <div className={style.conteiner}>
         <input type='search' placeholder="ID de personaje.." onChange={handlerChange} className={style.input}/>
         <Link to="/home">
         <button onClick={() => onSearch(id)} className={style.button}>Agregar</button>
         <button onClick={() => onSearch(randomNumber)} className={style.button}>Personaje Aleatorio</button>
         </Link>
      </div>
   );
}

export default SearchBar;
