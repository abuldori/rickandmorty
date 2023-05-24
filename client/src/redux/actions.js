import axios from "axios";
import { ADD_FAV, REMOVE_FAV, GET_CHARACTER_DETAIL, CLEAN_DETAIL, ORDER, FILTER } from "./actionsTypes";

export const addfav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/favorite';
    console.log(character);
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)
            console.log(data);
               return dispatch({
                   type: ADD_FAV,
                   payload: data,
                });  
            
        } catch (error) {
            console.error(error);
        }
    };
 };

// export const remove_favorites = (id) => {
//     return{
//         type: REMOVE_FAVORITES,
//         payload: id,
//     }
// }

// export const removeFav = (id) => {
//     const endpoint = `http://localhost:3001/rickandmorty/fav/` + id;
//         return (dispatch) => {
//             axios.delete(endpoint)
//             .then(({ data }) => {
//                 return dispatch({
//                     type: REMOVE_FAV,
//                     payload: data,
//        });
//        });
//     };
//  };
// ! CON ASYNC AWAIT
export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/favorite/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.error(error);
        }
    };
};



export const getCharacterDetail = (id) => {
  const URL_BASE = `http://localhost:3001/rickandmorty/character/`
//const KEY = '7232b1acf849.9fe3a698a40396b2a72b'
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${URL_BASE}${id}`)
               dispatch({
                type: GET_CHARACTER_DETAIL, 
                payload: data
                })
        } catch (error) {
            return error.message;
        }
    }
}

export const cleanDetail = () => {
    return{
        type: CLEAN_DETAIL
    }
}

export const filterCards = (status) => {
    return {type: FILTER, payload: status}
}

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
}

