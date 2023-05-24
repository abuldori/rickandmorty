import { useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { filterCards, orderCards } from "../../redux/actions";
import style from "./Favorites.module.css"

const Favorites = () => {
    const favorites = useSelector(state => state.myFavorites);
    const favoritesArray = Array.from(favorites);

    const dispatch = useDispatch()

    const handlerOrder = (e) =>{
        dispatch(orderCards(e.target.value))
    }
    const handlerFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    
    return(
        <div>
            <div>
                <select  className={style.selects} onChange={(e) => {handlerOrder(e)}} >
                    <option className={style.op2} value="order" disabled="disabled" >Order By</option>
                    <option className={style.op} value="Ascendente">Ascendente</option>
                    <option className={style.op2} value="Descendente">Descendente</option>
                </select>
                <select  className={style.selects} onChange={(e) => {handlerFilter(e)}} >
                <option className={style.op2} value="filter" disabled="disabled" >Filter By</option>
                    <option className={style.op} value="all Fav">All Fav</option>
                    <option className={style.op2} value="Male">Male</option>
                    <option className={style.op} value="Female">Female</option>
                    <option className={style.op2} value="unknown">Unknown</option>
                    <option className={style.op} value="Genderless">Genderless</option>
                </select>
            </div>
            
            {favoritesArray.map((char) => {
                return(
                    <Card 
                    key={char?.id}
                    id={char?.id}
                    name={char?.name}
                    species={char?.species}
                    gender={char?.gender}
                    image={char?.image}
                    />
                )
            })}
        </div>

    )
    }         
    
export default Favorites;

            