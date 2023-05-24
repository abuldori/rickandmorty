import React from "react";
import SearchBar from "./SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";


const Nav = ({ onSearch }) => {
  
    return(
        <div className={style.conteiner}>
            <div className={style.btns2}>
            <Link to="/home" className={style.home} >Home</Link>
            <Link to="/about" className={style.about}>About</Link>
            <Link to="/favorites" className={style.about}>Favorites</Link>
            </div>
            <SearchBar onSearch={onSearch} />
            <div className={style.btns}>
            <Link to="/" className={style.home}>Logout</Link>
            </div>

        </div>
    )
}

export default Nav;