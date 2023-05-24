import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addfav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";

const Card = ({ name, species, gender, image, onClose, status, id }) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(
        addfav({
          id,
          status,
          name,
          species,
          gender,
          origin,
          image,
        })
      );
    }
  };

  // useEffect(() => {
  //   const isFavorite = myFavorites.some((fav) => fav.id === id);
  //   setIsFav(isFavorite);
  // }, [myFavorites, id]);

  useEffect(() => {
    let isFavorite = false;
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) {
        isFavorite = true;
        break;
      }
    }
    setIsFav(isFavorite);
  }, [myFavorites, id]);
  

  return (
    <div className={style.contenedorPadre}>
      <div className={style.contenedorCards}>
        {isFav ? (
          <button className={style.btnFav} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={style.btnFav} onClick={handleFavorite}>🤍</button>
        )}
       
        <Link to={`/detail/${id}`}>
          <img src={image} alt="" />
        </Link>
        <h2>Nombre: {name} </h2>
        <h2>Especie: {species} </h2>
        <h2>Genero: {gender} </h2>
        
          <button className={style.button} onClick={() => onClose(id)}>
            X
          </button>
      </div>
    </div>
  );
};

export default Card;
