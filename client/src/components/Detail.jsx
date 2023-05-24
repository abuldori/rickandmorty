import style from "./Detail.module.css";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterDetail, cleanDetail } from "../redux/actions";


const Detail = () => {
    const { detailId } = useParams();
    const dispatch = useDispatch();
    const character = useSelector((state) => state.characterDetail);
   
    // Este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.
    useEffect(() => {
      dispatch(getCharacterDetail(detailId));
      return () => {
        dispatch(cleanDetail())
      }
      }, [detailId]);

  
  return(
    <div className={style.conteiner}>
        {character.name ? ( 
        <> 
        <div className={style.cointeinerCard}>
          <div>
            <img className={style.img} src={character?.image} alt={character?.name} />
          </div>
          <div className={style.conteinerlyp}>

            <label className={style.label} htmlFor="status">Nombre:</label>
                <p className={style.p}>{character?.name}</p>

            <label className={style.label} htmlFor="status">Status:</label>
                <p className={style.p}> {character?.status}</p>

            <label className={style.label} htmlFor="specie">Specie:</label>
                <p className={style.p}>{character?.species}</p>

            <label className={style.label} htmlFor="origin">Origin:</label>
                <p className={style.p}>{character?.origin}</p>

            <label className={style.label} htmlFor="gender">Gender:</label>
                <p className={style.p}>{character?.gender}</p>      
          </div>
        </div>
        </>
        ) : (
          <img src="https://www.gifss.com/dibujos-animados/rick-morty/images/rick-y-morty-04.gif" className={style.loading} />
        )}
    </div>   
)

}

export default Detail;