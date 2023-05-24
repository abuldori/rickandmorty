import { createStore, applyMiddleware, compose} from "redux"; //para hacer la peticion / para conectarlo
import reducer from "./reducer";
import ThunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"


const compouseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; 
// esta linea nos permite conectarnos con la extension del navefador

const store = createStore(
    reducer, composeWithDevTools
    (applyMiddleware(ThunkMiddleware)) // esta linea me sirve para hace peticiones a la API
    )

    export default store;