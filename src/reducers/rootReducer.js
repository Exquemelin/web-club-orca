import { combineReducers } from "redux";
import { installationReducer } from "./instReducer";



export const rootReducer = combineReducers({
    inst: installationReducer,
})