import { combineReducers } from "redux";
import characterReducer from "./charactersRedusers";


const rootReducer = combineReducers({
    characters: characterReducer,
});

export default rootReducer;