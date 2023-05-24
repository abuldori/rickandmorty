import { ADD_FAV, REMOVE_FAV, GET_CHARACTER_DETAIL, CLEAN_DETAIL, FILTER, ORDER} from "./actionsTypes";

const inicialState = {
    myFavorites: [],
    characterDetail: {},
    allCharacters: [],
   
};

const reducer = (state = inicialState, action) => {
    switch(action.type){
        case ADD_FAV:
        return { 
            ...state, 
            myFavorites: action.payload, 
            allCharacters: action.payload 
        };
        // case ADD_FAVORITES:
        //     return{
        //         ...state, //pq 2 estados iguales? es para no perder a los fav
        //         myFavorites: [...state.allCharacters, action.payload],
        //         allCharacters: [...state.allCharacters, action.payload],
              
        //     }
        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload
            };

        case GET_CHARACTER_DETAIL:
            return{
                ...state,
                characterDetail: action.payload
            };

        case CLEAN_DETAIL:
            return{
                ...state,
                characterDetail: {}
            }
        // case FILTER:
        //     const allCharsFilters = state.allCharacters.filter((char) => char.gender === action.payload)
        //         return{
        //         ...state,
        //         myFavorites: allCharsFilters
        //     }
        // case ORDER:
        //         let sortedCharacters = [...state.allCharacters];
        //         if (action.payload === "Ascendente") {
        //           sortedCharacters.sort((a, b) => a.id - b.id);
        //         } else if (action.payload === "Descendente") {
        //           sortedCharacters.sort((a, b) => b.id - a.id);
        //         }
        //         return {
        //           ...state,
        //           myFavorites: sortedCharacters,
        //         };
        case FILTER:
            const filteredChars = state.allCharacters.filter(
                (char) => char.gender === action.payload
            );
            let sortedFilteredChars = [...filteredChars];

                //esto lo hice para conbinar los filtros
                action.payload === "Ascendente"
                ? sortedFilteredChars.sort((a, b) => a.id - b.id)
                : sortedFilteredChars.sort((a, b) => b.id - a.id)
             //hasta aca, sin esto no se convinan
            return {
                ...state,
                myFavorites: 
                 action.payload === "all Fav"
                ? state.allCharacters 
                : sortedFilteredChars
            }

        case ORDER:
                let sortedChars = [...state.myFavorites]
                action.payload === "Ascendente"
                ? sortedChars.sort((a, b) => a.id - b.id)
                : sortedChars.sort((a, b) => b.id - a.id);
            return {
                ...state,
                myFavorites: sortedChars,
            }
        default:
            return{...state}
        }

    }

export default reducer;